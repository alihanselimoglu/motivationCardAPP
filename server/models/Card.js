const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please enter your text'],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const card = mongoose.model('Card', cardSchema);

module.exports = card;
