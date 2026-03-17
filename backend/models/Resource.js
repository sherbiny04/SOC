const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ['video', 'document', 'link', 'image', 'other'],
      default: 'other',
    },
    url: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resource', resourceSchema);
