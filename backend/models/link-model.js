import mongoose from 'mongoose';

const SocialIconSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true }
});

const LinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bannerImage: { type: String },
  socialIcons: [SocialIconSchema],
  links: [LinkSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ProfileSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const linkModel = mongoose.model('Profile', ProfileSchema);
export default linkModel;
