const mongoose = require('mongoose');
require('dotenv').config();

const db = mongoose.connection;

mongoose.connect(`
            mongodb+srv://${process.env.DATABASE_USER}:afropass@cluster0-elapq.mongodb.net/test?retryWrites=true&w=majority`,
            { useNewUrlParser: true }
);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to 𝔡𝔞𝔱𝔞𝔟𝔞𝔰𝔢`);
});