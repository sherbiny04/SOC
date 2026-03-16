const Participant = require('../models/Participant');

const buildPaginationAndSort = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.max(1, parseInt(query.limit) || 10);
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy || 'createdAt';
  const order = query.order === 'asc' ? 1 : -1;
  return { page, limit, skip, sort: { [sortBy]: order } };
};

// POST /api/participants
exports.createParticipant = async (req, res) => {
  try {
    const participant = await Participant.create(req.body);
    res.status(201).json({ success: true, data: participant });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/participants
exports.getAllParticipants = async (req, res) => {
  try {
    const { page, limit, skip, sort } = buildPaginationAndSort(req.query);
    const filter = {};

    if (req.query.role) filter.role = req.query.role;

    const [participants, total] = await Promise.all([
      Participant.find(filter).sort(sort).skip(skip).limit(limit),
      Participant.countDocuments(filter),
    ]);

    res.json({ success: true, data: participants, total, page, limit });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/participants/:id
exports.getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) return res.status(404).json({ success: false, message: 'Participant not found' });
    res.json({ success: true, data: participant });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/participants/:id
exports.updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!participant) return res.status(404).json({ success: false, message: 'Participant not found' });
    res.json({ success: true, data: participant });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE /api/participants/:id
exports.deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) return res.status(404).json({ success: false, message: 'Participant not found' });
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
