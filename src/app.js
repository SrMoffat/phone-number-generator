const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'views/random-generator/public')));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '', 'views/random-generator/public'));
});

module.exports = app;
