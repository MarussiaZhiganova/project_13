const router = require('express').Router();
const {
  getCards, createCards, deleteCards,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', createCards);
router.delete('/:cardId', deleteCards);

module.exports = router;
