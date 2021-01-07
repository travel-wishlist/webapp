const bcrypt = require("bcryptjs");

// buat hashPassword dan comparePassword di sini
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hash){
  return bcrypt.compareSync(password, hash);
}

module.exports = { hashPassword, comparePassword }