const { logEvents } = require("./logger");

const errLogger = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500; //server error

  res.status(500);

  res.json({ message: err.message });
};

module.exports = errLogger;

