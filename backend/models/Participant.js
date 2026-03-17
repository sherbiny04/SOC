const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin', 'observer'],
      default: 'student',
    },
    phone: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Participant', participantSchema);
