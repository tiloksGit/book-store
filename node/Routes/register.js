const express = require("express");
const router = express.Router();
const multer = require("multer");
const registerController = require("../Controller/registerController");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dmcc0328s",
  api_key: "313713162159885",
  api_secret: "MEY80Glc1ZfM_gmWNJ5bRKUzBWU",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "bookThumbnails", // Optional, specify a folder to store the images
  allowedFormats: ["jpeg", "jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }], // Optional, specify any image transformation options
});

const upload = multer({ storage: storage });
router.post("/", upload.single("img"), registerController.createNewUser);

module.exports = router;
