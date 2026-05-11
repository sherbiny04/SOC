const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: ['scheduled', 'in-progress', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', sessionSchema);
