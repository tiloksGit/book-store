const nodemailer = require("nodemailer");
const User = require("../models/User");
const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");
const Seller = require("../models/Seller");

const mailHandler = asyncHandler(async (req, res) => {
  const { bookId, username } = req.body;
  console.log(bookId, username);
  if (!bookId || !username) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "mini_project_test@outlook.com",
      pass: "miniproject@123",
    },
  });

  const book = await Book.findById(bookId).exec();
  const user = await User.findOne({ username }).exec();
  console.log(user);

  const id = book.uploadedBy;
  console.log(id);
  const seller = await User.findById(book.uploadedBy).lean().exec();
  const options = {
    from: "mini_project_test@outlook.com",
    to: seller.emailID,
    subject: "Book order",
    text: `You have recieved an order for the book id: ${bookId}, title: ${book.title}\n Name of the Buyer: ${user.username}`,
  };

  if (!book.available) {
    return res
      .status(202)
      .json({ message: "book is not available for sale right now" });
  }
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });

  book.available = false;
  if (!user.booksBought) {
    user.booksBought = [];
  }
  user.booksCount = user.booksCount + 1;
  await user.booksBought.push({ bookId: bookId });

  await user.save();
  await book.save();

  console.log("mail sent successfully");
  res.status(200).json({ message: "Book order successfull" });
});

module.exports = { mailHandler };
