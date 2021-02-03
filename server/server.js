const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use('/', express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});