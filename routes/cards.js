const router = require('express').Router();
const {
  getCards, getCardId, createCards, deleteCards,
} = require('../controllers/cards');

router.get('/', getCards);
router.get('/:cardId', getCardId);
router.post('/', createCards);
router.delete('/:cardId', deleteCards);

module.exports = router;
