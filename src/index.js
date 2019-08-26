const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`𝔫𝔲𝔪𝔟𝔢𝔯𝔰 is running on port: ${port}`)
});
