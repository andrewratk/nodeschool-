const fs = require('fs');
const path = require('path');

module.exports = (dir, fileStr, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    list = list.filter((file) => path.extname(file) === '.' + fileStr);
    callback(null, list);
  });
};
