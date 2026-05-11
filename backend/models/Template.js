const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, enum: ["Agile", "Operations", "Strategy", "Design"] },
    usage: { type: Number, default: 0, min: 0 },
    description: { type: String },
    category: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Template', templateSchema);
