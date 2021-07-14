const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

const printResults = () => {
  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
};

const httpGet = (index) => {
  http.get(process.argv[2 + index], (res) => {
    res.pipe(
      bl((err, data) => {
        err ? console.error(err) : (results[index] = data.toString());
        count++;
        if (count === process.argv.length - 2) {
          printResults();
        }
      })
    );
  });
};

for (let i = 0; i < process.argv.length - 2; i++) httpGet(i);
