const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

// buat token dan cek token jwt di sini
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

function checkToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { createToken, checkToken };
