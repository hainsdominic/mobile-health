const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    id: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    sexAtBirth: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    questionnary: {
        type: [Map],
        required: false,
    },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
