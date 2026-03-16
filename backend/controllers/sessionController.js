const Session = require('../models/Session');

const buildPaginationAndSort = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.max(1, parseInt(query.limit) || 10);
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy || 'createdAt';
  const order = query.order === 'asc' ? 1 : -1;
  return { page, limit, skip, sort: { [sortBy]: order } };
};

// POST /api/sessions
exports.createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json({ success: true, data: session });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/sessions
exports.getAllSessions = async (req, res) => {
  try {
    const { page, limit, skip, sort } = buildPaginationAndSort(req.query);
    const filter = {};

    if (req.query.status) filter.status = req.query.status;

    if (req.query.startDate || req.query.endDate) {
      filter.date = {};
      if (req.query.startDate) filter.date.$gte = new Date(req.query.startDate);
      if (req.query.endDate) filter.date.$lte = new Date(req.query.endDate);
    }

    const [sessions, total] = await Promise.all([
      Session.find(filter).sort(sort).skip(skip).limit(limit).populate('template').populate('participants'),
      Session.countDocuments(filter),
    ]);

    res.json({ success: true, data: sessions, total, page, limit });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/sessions/:id
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id).populate('template').populate('participants');
    if (!session) return res.status(404).json({ success: false, message: 'Session not found' });
    res.json({ success: true, data: session });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT /api/sessions/:id
exports.updateSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!session) return res.status(404).json({ success: false, message: 'Session not found' });
    res.json({ success: true, data: session });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE /api/sessions/:id
exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.status(404).json({ success: false, message: 'Session not found' });
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
