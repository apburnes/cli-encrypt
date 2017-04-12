const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'aes256';

module.exports.encrypt = function encrypt(zipFile, outFile, password) {
  const readZip = fs.createReadStream(zipFile);
  const writeEncrypt = fs.createWriteStream(outFile);
  const cipher = crypto.createCipher(algorithm, password);

  return readZip.pipe(cipher).pipe(writeEncrypt);
}

module.exports.decrypt = function decrypt(encryptFile, outFile, password) {
  const readEncrypt = fs.createReadStream(encryptFile);
  const writeZip = fs.createWriteStream(outFile);
  const decipher = crypto.createDecipher(algorithm, password);

  return readEncrypt.pipe(decipher).pipe(writeZip);
}
