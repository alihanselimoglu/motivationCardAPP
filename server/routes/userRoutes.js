const express = require('express');

const userController = require("../controllers/userControllers");

const router = express.Router();
router.route("/").get(userController.getAllUsers);
router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router.route("/:id").get(userController.getAUser).patch(userController.updateUser).delete(userController.deleteUser);


module.exports = router;