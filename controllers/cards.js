const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createCards = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      res.status(400).send({ message: err.message });
      console.error(err.stack);
    });
};

module.exports.deleteCards = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(404).send({ message: 'Not found' });
        console.error();
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
