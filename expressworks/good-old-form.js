const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app
  .post('/form', (req, res) =>
    res.send(req.body.str.split('').reverse().join(''))
  )
  .listen(process.argv[2]);
