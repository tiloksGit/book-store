require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logger");
const errLogger = require("./middleware/errLogger");
const cookieParser = require("cookie-parser");
// const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const { logEvents } = require("./middleware/logger");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 9000;

console.log(process.env.NODE_ENV);
connectDB();
app.use(logger);

//cross origin resource sharing
// app.use(cors({ credentials: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/users/avatar", express.static("avatar"));
app.use("/books/bookThumbnail", express.static("bookThumbnail"));

app.use("/", require("./Routes/root"));
app.use("/users", require("./Routes/userRoutes"));
app.use("/users/profile", require("./Routes/profileRoute"));
app.use("/books", require("./Routes/booksRoutes"));
app.use("/register", require("./Routes/register"));
app.use("/auth", require("./Routes/Authenticate"));
// app.use("/sales", require("./Routes/salesRoute"));
app.use("/sendmail", require("./Routes/mailRoute"));

app.use("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "Views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("txt").send("404... page not found");
  }
});

app.use(errLogger);

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
