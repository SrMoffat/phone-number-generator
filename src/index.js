const app = require('./app');

require('dotenv').config();

const { models, connectToDb } = require('../src/api/db/models');

const port = process.env.PORT || 5000;


app.listen(port, () => {
    connectToDb().then(async () => {
        console.log('Her')
        
    }).catch(err => console.log(err))
    console.log(`𝔫𝔲𝔪𝔟𝔢𝔯𝔰 is running on port: ${port}`)
});

