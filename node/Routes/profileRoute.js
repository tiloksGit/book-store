const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);
router.route("/").post(userController.getAllUsers);

module.exports = router;
