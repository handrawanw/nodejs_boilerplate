const bcr = require("bcryptjs");

function hashPass(pass) {
  let salt = bcr.genSaltSync(10);
  let newPass = bcr.hashSync(pass, salt);
  return newPass;
}

function checkPass(pass, hash) {
  return bcr.compareSync(pass, hash);
}

module.exports = { hashPass, checkPass };