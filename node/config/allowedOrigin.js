const { removeAllListeners } = require("nodemon");

const allowedOrigin = [
  "https://www.google.com",
  "http://localhost:3000",
  "http://127.0.0.1:8080",
  "postman",
  "https://admirable-sprite-e9d94d.netlify.app",
];

module.exports = allowedOrigin;
