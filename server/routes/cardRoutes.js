const express = require('express');

const cardController = require('../controllers/cardControllers');

const router = express.Router();

router.route('/').get(cardController.getCards).post(cardController.createCard);

router.route('/random').get(cardController.getARandomCard);

router.route('/user/:id').get(cardController.getUserCards);

router
  .route('/:id')
  .get(cardController.getACard)
  .patch(cardController.updateCard)
  .delete(cardController.deleteCard);


module.exports = router;
