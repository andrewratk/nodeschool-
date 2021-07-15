const path = require('path');
const express = require('express');
const { join } = require('path');
const app = express();

app
  .use(express.static(process.argv[3] || path.join(__dirname, 'public')))
  .listen(process.argv[2]);
