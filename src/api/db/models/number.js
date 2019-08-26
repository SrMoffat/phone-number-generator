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

NumberSchema.statics.getRecentlyGenerated = async function () {
    let generatedPhoneNumbers = await this.find({ recentlyGenerated: true });

    if(!generatedPhoneNumbers){
        generatedPhoneNumbers = []
    }

    return generatedPhoneNumbers;
}

const PhoneNumber = mongoose.model('Number', NumberSchema);

module.exports = PhoneNumber;