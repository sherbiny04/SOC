const Resource = require('../models/Resource');

const buildPaginationAndSort = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.max(1, parseInt(query.limit) || 10);
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy || 'createdAt';
  const order = query.order === 'asc' ? 1 : -1;
  return { page, limit, skip, sort: { [sortBy]: order } };
};

exports.createResource = async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json({ success: true, data: resource });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getAllResources = async (req, res) => {
  try {
    const { page, limit, skip, sort } = buildPaginationAndSort(req.query);
    const filter = {};

    if (req.query.type) filter.type = req.query.type;

    const [resources, total] = await Promise.all([
      Resource.find(filter).sort(sort).skip(skip).limit(limit),
      Resource.countDocuments(filter),
    ]);

    res.json({ success: true, data: resources, total, page, limit });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ success: false, message: 'Resource not found' });
    res.json({ success: true, data: resource });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!resource) return res.status(404).json({ success: false, message: 'Resource not found' });
    res.json({ success: true, data: resource });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ success: false, message: 'Resource not found' });
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
