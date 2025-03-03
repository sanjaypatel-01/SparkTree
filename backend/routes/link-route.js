import express from 'express';
import linkModel from '../models/link-model.js';
import authMiddleware from '../middleware/Auth.middleware.js';

const router = express.Router();

// POST Create Profile
router.post('/links', authMiddleware, async (req, res) => {
  const { bannerImage, bio } = req.body;
  try {
    // const profile = new linkModel({ bannerImage, bio, userId: req.user.id });
    // await profile.save();
    // res.status(201).json(profile);
    // 1. Look for an existing profile
    let profile = await linkModel.findOne({ userId: req.user.id });

    // 2. If it doesn't exist, create a new one
    if (!profile) {
      profile = new linkModel({ userId: req.user.id });
    }

    // 3. Update fields (whether new or existing)
    profile.bannerImage = bannerImage;
    profile.bio = bio;

    // 4. Save changes
    await profile.save();

    return res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err });
  }
});

// GET Profile by User ID
router.get('/getlinks', authMiddleware, async (req, res) => {
  try {
    const profile = await linkModel.findOne({ userId: req.user.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

// for frame share
router.get('/getlinks/:id', async (req, res) => {
  try {
    const profile = await linkModel.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

// Create Link
// Create Link
// router.post("/create-link", authMiddleware, async (req, res) => {
//   let { title, url, application } = req.body;
//   const userId = req.user.id; // Extract user ID from token

//   try {
//     // Validate required fields
//     if (!title || !url || !application) {
//       return res.status(400).json({ message: "Title, URL, and Application are required" });
//     }

//     // Normalize the application field to lowercase
//     application = application.toLowerCase();

//     // Create new profile with the link wrapped in an array
//     const newProfile = await linkModel.create({
//       userId,
//       links: [{ title, url, application }],
//     });

//     res.status(201).json({
//       success: true,
//       message: "Profile created successfully",
//       profile: newProfile,
//     });
//   } catch (err) {
//     console.error("Create Link Error:", err);
//     res.status(500).json({ message: "Internal Server Error", error: err.message });
//   }
// });
router.post("/create-link", authMiddleware, async (req, res) => {
  let { title, url, application } = req.body;
  const userId = req.user.id; // Extract user ID from token

  try {
    // Validate required fields
    if (!title || !url || !application) {
      return res.status(400).json({ message: "Title, URL, and Application are required" });
    }

    // Normalize the application field to lowercase
    application = application.toLowerCase();

    // Check if profile already exists for the user
    let profile = await linkModel.findOne({ userId });

    if (profile) {
      // Profile exists: push new link into links array
      profile.links.push({ title, url, application });
      await profile.save();
    } else {
      // Profile doesn't exist: create a new profile with the link inside an array
      profile = await linkModel.create({
        userId,
        links: [{ title, url, application }],
      });
    }

    res.status(201).json({
      success: true,
      message: "Link created successfully",
      profile,
    });
  } catch (err) {
    console.error("Create Link Error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});



// Fetch Links
router.get("/fetch-link", authMiddleware, async (req, res) => {
  const userId = req.user.id; // Extract user ID from token

  try {
    const profile = await linkModel.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({
      success: true,
      message: "Links fetched successfully",
      links: profile.links,
    });
  } catch (err) {
    console.error("Fetch Links Error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

router.get("/fetch-link/:id", async (req, res) => {
  const userId = req.params.id; // Extract user ID from token

  try {
    const profile = await linkModel.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({
      success: true,
      message: "Links fetched successfully",
      links: profile.links,
    });
  } catch (err) {
    console.error("Fetch Links Error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

// Delete Link
router.delete("/delete-link/:linkId", authMiddleware, async (req, res) => {
  const userId = req.user.id; // Extract user ID from token
  const { linkId } = req.params; // The ID of the link to be deleted

  try {
    // Find the user's profile that contains the links
    let profile = await linkModel.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // Check if the link exists in the profile's links array
    const linkExists = profile.links.some(link => link._id.toString() === linkId);
    if (!linkExists) {
      return res.status(404).json({ message: "Link not found" });
    }

    // Remove the link by filtering it out
    profile.links = profile.links.filter(link => link._id.toString() !== linkId);

    // Save the updated profile
    await profile.save();

    res.status(200).json({
      success: true,
      message: "Link deleted successfully",
      profile,
    });
  } catch (err) {
    console.error("Delete Link Error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});



// PUT Update Profile by User ID
router.put('/:id', authMiddleware, async (req, res) => {
  const { bannerImage, socialIcons, links } = req.body;
  try {
    const profile = await linkModel.findOneAndUpdate(
      { userId: req.params.id },
      { bannerImage, socialIcons, links, updatedAt: Date.now() },
      { new: true }
    );
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err });
  }
});

// DELETE Profile by User ID
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const profile = await linkModel.findOneAndDelete({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

export default router;
