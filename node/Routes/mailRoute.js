const express = require("express");
const router = express.Router();
const mailController = require("../Controller/mailController");
const verifyJWT = require("../middleware/verifyJWT");

router.route("").post(verifyJWT, mailController.mailHandler);

module.exports = router;
