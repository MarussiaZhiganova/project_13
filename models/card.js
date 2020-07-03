const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    match: /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/,
    type: String,
    required: true,
  },
  owner: {
    ref: 'cards',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  likes: [{
    list: String,
    liked: { type: mongoose.Schema.Types.ObjectId, default: 0 },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
