import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  application: { type: String, required: true, enum: ['twitter', 'facebook', 'instagram', 'youtube'] },
  createdAt: { type: Date, default: Date.now }
});

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bannerImage: { type: String },
  links: [LinkSchema],
  bio: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ProfileSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const linkModel = mongoose.model('Profile', ProfileSchema);
export default linkModel;
