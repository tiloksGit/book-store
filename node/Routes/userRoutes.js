const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router
  .route("/")
  .patch(userController.updateUser)
  .delete(userController.deleteUsers);

router.route("/profile").post(userController.getAllUsers);
module.exports = router;
