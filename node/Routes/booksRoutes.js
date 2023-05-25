const express = require("express");
const router = express.Router();
const booksController = require("../Controller/booksController");
const verifyJWT = require("../middleware/verifyJWT");
const multer = require("multer");
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

router
  .route("/")
  .get(booksController.getAllBooks)
  .post(verifyJWT, upload.single("img"), booksController.postNewBooks)
  .delete(verifyJWT, booksController.deleteBooks);

router.route("/:id").get(booksController.getBooks);

module.exports = router;
