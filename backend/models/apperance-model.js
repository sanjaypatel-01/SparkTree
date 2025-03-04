import mongoose from 'mongoose';

const appearanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Background / Theme
    backgroundTheme: {
      type: String,
      default: "ffffff",
    },

    buttonColor: {
      type: String,
      default: "#ffffff",
    },

    buttonFontColor: {
      type: String,
      default: "#000000",
    },

    // Layout Options
    layout: {
      type: String,
      default: "stack",
    },
  },

);

const linkAppearance = mongoose.model('Appearance', appearanceSchema);
export default linkAppearance;
