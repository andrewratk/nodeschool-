const mymodule = require('./mymodule');
mymodule(process.argv[2], process.argv[3], (err, list) =>
  err ? console.error(err) : list.forEach((file) => console.log(file))
);
