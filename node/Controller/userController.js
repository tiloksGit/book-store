const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/User");

//get
const getAllUsers = asyncHandler(async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(404).json({ message: "all fields are required" });
  }
  const users = await User.findOne({ username }).lean();
  if (!users) {
    return res.status(400).json({ message: "NO users found" });
  }
  res.json(users);
});

//post
// const createNewUser = asyncHandler(async (req, res) => {
//   const { username, password, branch, avatarURL, semester, emailID } = req.body;
//   console.log(emailID);
//   //confirm data
//   if (!username || !password || !branch || !semester || !emailID) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   //check for duplicates

//   const duplicate = await User.findOne({ username }).lean().exec();

//   if (duplicate) {
//     return res.status(409).json({ message: "Duplicate found" });
//   }

//   const hashedPasswd = await bcrypt.hash(password, 10);
//   //Store the newUser
//   const newUser = {
//     username,
//     password: hashedPasswd,
//     avatarURL,
//     branch,
//     emailID,
//     semester,
//   };

//   //create user
//   const user = await User.create(newUser);

//   if (user) {
//     res.status(201).json({ message: "new user created" });
//   } else {
//     res.status(400).json({ message: "Invalid data recieved" });
//   }
// });

//patch
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, password } = req.body;

  if (!id || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate && duplicate?._id.toString !== id) {
    return res.status(409).json({ message: "Duplicate Username" });
  }

  user.username = username;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.username} updated` });
});

//delete
const deleteUsers = asyncHandler(async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: "User if required" });
  }

  const user = await User.findOne({ username }).exec();

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  const reply = `Username ${result.username} with ID ${result._id} deleted`;

  res.status(200).json({ message: reply });
});

module.exports = { getAllUsers, updateUser, deleteUsers };
