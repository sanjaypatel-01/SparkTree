import express from 'express';
import linkModel from '../models/link-model.js';
import authMiddleware from '../middleware/Auth.middleware.js';

const router = express.Router();

// POST Create Profile
router.post('/links', authMiddleware, async (req, res) => {
  const { bannerImage, bio } = req.body;
  try {
    const profile = new linkModel({ bannerImage, bio, userId: req.user.id });
    await profile.save();
    res.status(201).json(profile);
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

// Create Link
router.post("/create-link", authMiddleware, async (req, res) => {
  const { title, url, application } = req.body;
  const userId = req.user.id; // Extract user ID from token

  try {
    if (!title || !url || !application) {
      return res.status(400).json({ message: "Banner Image and Bio are required" });
    }

    const newProfile = await linkModel.create({
      userId,
      title,
      url,
      application
    });

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      profile: newProfile,
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
