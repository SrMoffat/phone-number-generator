const mongoose = require('mongoose');

const NumberSchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        unique: true,
        required: true
    },
    recentlyGenerated: {
        type: Boolean,
        default: false,
        required: true
    }
});

const PhoneNumber = mongoose.model('Number', NumberSchema);

module.exports = PhoneNumber;