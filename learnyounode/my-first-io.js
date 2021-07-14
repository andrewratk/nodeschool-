const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
const result = buf.toString().split('\n').length - 1;

console.log(result);
