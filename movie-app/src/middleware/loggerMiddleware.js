// src/middleware/loggerMiddleware.js
const fs = require('fs');

const loggerMiddleware = (req, res, next) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFile('log.txt', logData, (err) => {
    if (err) {
      console.error('Error writing to log file');
    }
  });
  next();
};

module.exports = loggerMiddleware;
