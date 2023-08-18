const Card = require('../models/Card');

const createCard = async (req, res) => {
  const { text, author } = req.body;

  try {
    const card = await Card.create({ text, author });

    res.status(201).json({
      success: true,
      card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();

    res.status(200).json({
      success: true,
      cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getACard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: 'Card not found',
      });
    }

    res.status(200).json({
      success: true,
      card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getARandomCard = async (req, res) => {
  try {
    const cards = await Card.find();

    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    res.status(200).json({
      success: true,
      randomCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getUserCards = async (req, res) => {
  try {
    const cards = await Card.find({ author: req.params.id });

    if (!cards) {
      return res.status(404).json({
        success: false,
        message: 'Cards not found',
      });
    }

    res.status(200).json({
      success: true,
      cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteCard = async (req, res) => {
  try {
    const cardId = req.params.id;

    const deletedCard = await Card.findOneAndDelete({ _id: cardId });

    if (!deletedCard) {
      return res.status(404).json({
        success: false,
        message: 'Card not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Card deleted',
      deletedCard: deletedCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


const updateCard = async (req, res) => {
  try {
    const { text } = req.body;

    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: 'Card not found',
      });
    }

    card.text = text;

    await card.save();

    res.status(200).json({
      success: true,
      card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createCard,
  getCards,
  getUserCards,
  deleteCard,
  updateCard,
  getARandomCard,
  getACard
};
