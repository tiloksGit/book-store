const mongoose = require("mongoose");
const Book = require("./Book");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatarURL: { type: String },
    emailID: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    booksBought: [
      {
        bookId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
        },
      },
    ],
    booksCount: { type: Number, default: 0 },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
