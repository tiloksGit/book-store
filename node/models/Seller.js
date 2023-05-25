const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  booksUploaded: [
    {
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Book",
      },
    },
  ],
});

module.exports = mongoose.model("Seller", sellerSchema);
