const jwt = require("jsonwebtoken");
const path = require("path");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  // res.status(403).json({ message: "Forbidden" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(404).json({ message: "Unauthorized" });
    req.user = decoded.UserInfo.username;
    req.branch = decoded.UserInfo.branch;
    next();
  });
};

module.exports = verifyJWT;
