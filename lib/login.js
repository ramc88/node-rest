const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function hashIt(data) {
  return crypto.createHash('sha256').update(data).digest('base64');
}

function sign(data) {
  return jwt.sign(data, global.config.secret, { algorithm: 'HS256' });
}

module.exports = {
  hashIt,
  sign,
};