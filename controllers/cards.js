const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};


module.exports.getCardId = (req, res) => {
  Card.findById({ _id: req.params.cardId })
    .then((card) => res.json(card))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createCards = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createCard = (req) => {
  console.log(req.user._id); // _id станет доступен
};

module.exports.deleteCards = (req, res) => {
  Card.findByIdAndRemove({ _id: req.params.cardId })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
