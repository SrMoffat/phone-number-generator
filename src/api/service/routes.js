const express = require('express');
const Service = require('./services');

// const { generateRandomNumber, getGeneratedNumbers } = Service;

const Router = express.Router();

Router.get('/', (req, res) => {
    console.log('GET request');
});

const routes = (app) => {
    app.use('/api', Router);
    return app;
};

module.exports = routes;


