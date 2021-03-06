const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', process.argv[3]);
app
  .get('/home', (req, res) =>
    res.render('index', { date: new Date().toDateString() })
  )
  .listen(process.argv[2]);
