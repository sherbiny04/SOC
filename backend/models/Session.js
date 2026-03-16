const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ['upcoming', 'completed', 'cancelled'],
      default: 'upcoming',
    },
    date: { type: Date, required: true },
    template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }],
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', sessionSchema);
