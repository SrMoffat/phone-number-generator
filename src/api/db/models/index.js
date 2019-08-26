const mongoose = require('mongoose');
const PhoneNumber = require('../models/number');
require('dotenv').config();

const connectToDb = async () => {
    const conn = await mongoose.connect(`
                        mongodb+srv://afro:afropass@cluster0-elapq.mongodb.net/test?retryWrites=true&w=majority`,
                        { useNewUrlParser: true }
    );
    return conn
}

const models = { PhoneNumber };
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to 𝔡𝔞𝔱𝔞𝔟𝔞𝔰𝔢`);
});

module.exports = {
    models,
    connectToDb
}