const Session = require('../models/Session');
const Participant = require('../models/Participant');

// GET /api/dashboard/stats
exports.getDashboardStats = async (req, res) => {
  try {
    const now = new Date();

    const [
      totalSessions,
      upcomingSessions,
      completedSessions,
      totalParticipants,
      topTemplateResult,
    ] = await Promise.all([
      Session.countDocuments(),
      Session.countDocuments({ status: 'upcoming', date: { $gte: now } }),
      Session.countDocuments({ status: 'completed' }),
      Participant.countDocuments(),
      Session.aggregate([
        { $match: { template: { $ne: null } } },
        { $group: { _id: '$template', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 },
        {
          $lookup: {
            from: 'templates',
            localField: '_id',
            foreignField: '_id',
            as: 'templateInfo',
          },
        },
        { $unwind: { path: '$templateInfo', preserveNullAndEmpty: true } },
        { $project: { _id: 0, template: '$templateInfo', usageCount: '$count' } },
      ]),
    ]);

    res.json({
      success: true,
      data: {
        totalSessions,
        upcomingSessions,
        completedSessions,
        totalParticipants,
        topTemplate: topTemplateResult[0] || null,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
