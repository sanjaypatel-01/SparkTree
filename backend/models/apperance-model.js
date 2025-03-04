const mongoose = require("mongoose");

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
      default: "air-snow",
    },
    customBackgroundColor: {
      type: String, // Hex code or CSS color
      default: "#ffffff",
    },

    // Button Design
    button: {
      style: {
        type: String,
        default: "fill",
      },
      color: {
        type: String,
        default: "#ffffff",
      },
      textColor: {
        type: String,
        default: "#000000",
      },
      // Add other button design properties here, e.g. borderRadius, fontWeight, etc.
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
