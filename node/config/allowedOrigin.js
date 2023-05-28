const { removeAllListeners } = require("nodemon");

const allowedOrigin = [
  "https://www.google.com",
  "http://localhost:3000",
  "http://127.0.0.1:8080",
  "postman",
  "https://admirable-sprite-e9d94d.netlify.app",
  "https://book-store-theta-black.vercel.app",
  "https://book-store-i1z1cu8t3-tiloksgit.vercel.app",
];

module.exports = allowedOrigin;
