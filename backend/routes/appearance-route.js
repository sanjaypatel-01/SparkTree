import express from 'express';
import linkAppearance from '../models/apperance-model.js';
import authMiddleware from '../middleware/Auth.middleware.js';

const router = express.Router();

// POST Create Profile
// POST Create/Update Appearance
router.post('/links', authMiddleware, async (req, res) => {
    const { buttonColor, buttonFontColor, layout, theme } = req.body;
  
    try {
      // 1. Find if user already has an appearance doc
      let profile = await linkAppearance.findOne({ user: req.user.id });
  
      // 2. If not, create a new one
      if (!profile) {
        profile = new linkAppearance({
          user: req.user.id, // Make sure to pass "user"
          buttonColor,
          buttonFontColor,
          layout,
          backgroundTheme: theme,
        });
      } else {
        // 3. If it exists, update fields
        profile.buttonColor = buttonColor || profile.buttonColor;
        profile.buttonFontColor = buttonFontColor || profile.buttonFontColor;
        profile.layout = layout || profile.layout;
        profile.backgroundTheme = theme || profile.backgroundTheme;
      }
  
      // 4. Save changes
      await profile.save();
  
      return res.status(200).json(profile);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: 'Bad Request', error: err });
    }
  });
  
  

// Fetch Links
router.get("/fetch-link", authMiddleware, async (req, res) => {
    const user = req.user.id; // Extract user ID from token
  
    try {
      const profile = await linkAppearance.findOne({ user });
  
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
  
      res.status(200).json({
        success: true,
        message: "Links fetched successfully",
        profile,
      });
    } catch (err) {
      console.error("Fetch Links Error:", err);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  });
  

  router.get('/getlinks', authMiddleware, async (req, res) => {
    try {
      const profile = await linkAppearance.findOne({ userId: req.user.id });
      if (!profile) return res.status(404).json({ message: 'Profile not found' });
      res.json(profile);
    } catch (err) {
      res.status(500).json({ message: 'Server Error', error: err });
    }
  });
  

  export default router;