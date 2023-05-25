const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");
const registerController = require("../Controller/registerController");

const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().lean();
  if (!books?.length) {
    return res.status(400).json({ message: "No books found" });
  }
  res.status(200).json({ books });
});

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id).populate(
    "orderBy.userId",
    "username",
    {
      strictPopulate: false,
    }
  );
  if (!books) {
    return res.status(400).json({ message: "No books found" });
  }

  const usernames = books.map((book) =>
    book.orderBy.map((obj) => obj.userId.username)
  );

  res.status(200).json({ books, usernames });
});

const postNewBooks = asyncHandler(async (req, res) => {
  const { bookname, author, userId, branch, expecPrice } = req.body;
  let imgURL;
  if (req.file) {
    imgURL = req.file.path;
  }
  //confirm data
  if (!bookname || !author || !userId) {
    return res.status(400).json({ message: " All fields are required" });
  }
  //Store the newUser
  const newBook = {
    title: bookname,
    author,
    uploadedBy: userId,
    imgURL,
    branch,
    expecPrice,
  };

  const book = await Book.create(newBook);

  if (book) {
    res.status(201).json({ message: "new book uploaded" });
  } else {
    res.status(400).json({ message: "Invalid data recieved" });
  }
});

//delete
const deleteBooks = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Book id required" });
  }

  const book = await Book.findById(id).exec();

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const result = await book.deleteOne();

  const reply = `Book ${result.title} with ID ${result._id} deleted`;

  res.status(200).json({ message: reply });
});

module.exports = { getAllBooks, postNewBooks, deleteBooks, getBooks };
