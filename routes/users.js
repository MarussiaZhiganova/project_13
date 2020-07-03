const router = require('express').Router();

const { getUser, createUser, getUserId } = require('../controllers/users');

router.get('/', getUser);
router.get('/:userId', getUserId);
router.post('/', createUser);

module.exports = router;
