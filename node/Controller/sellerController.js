const Seller = require("../models/Seller");
const asyncHandler = require("express-async-handler");

const addBooks = asyncHandler(async (req, res) => {
  const { userId, book } = req.body;
  if (!userId || !book) {
    return res.status(404).json({ message: "all fields are required" });
  }

  const seller = Seller.findById(userId).exec();
  if (!seller) {
    const newSeller = {
      sellerId: userId,
      bookId: [{ book }],
    };
    const sales = await Seller.create(newSeller);
    return res.status(200).json({ message: `user added to seller List` });
  }

  seller.bookId.push(book);

  res.status(200).json({ message: `new book ${book} added to sales list` });
});

module.exports = { addBooks };
