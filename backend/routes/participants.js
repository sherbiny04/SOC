const express = require('express');
const router = express.Router();
const {
  createParticipant,
  getAllParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
} = require('../controllers/participantController');

router.post('/', createParticipant);
router.get('/', getAllParticipants);
router.get('/:id', getParticipantById);
router.put('/:id', updateParticipant);
router.delete('/:id', deleteParticipant);

module.exports = router;
