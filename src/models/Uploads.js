const mongoose = require("mongoose");

const FileUploadSchema = new mongoose.Schema(
  {
    fieldname: {
      type: String,
      required: true,
      trim: true,
    },
    originalname: {
      type: String,
      required: true,
      trim: true,
    },
    filename: {
      type: String,
      required: true,
    },
    encoding: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FileUpload", FileUploadSchema);
