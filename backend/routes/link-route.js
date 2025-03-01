import express from 'express';
import linkModel from '../models/link-model.js';
import authMiddleware from '../middleware/Auth.middleware.js';

const router = express.Router();

// GET Profile by User ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const profile = await linkModel.findOne({ userId: req.params.id });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

// POST Create Profile
router.post('/', authMiddleware, async (req, res) => {
  const { userId, bannerImage, socialIcons, links } = req.body;
  try {
    const profile = new linkModel({ userId, bannerImage, socialIcons, links });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: 'Bad Request', error: err });
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
