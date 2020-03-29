const crypto = require('crypto');

function generateUniqueId() {
  return crypto.randomBytes(4).toString('Hex');
}

module.exports =  generateUniqueId;