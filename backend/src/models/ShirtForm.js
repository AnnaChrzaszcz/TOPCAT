const mongoose = require('mongoose');

const shirtSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },

    team: {
        type: String,
        default: ''
    },
    mail: {
        type: String,
        default: ''
    },
    size: String,
    model: String,
});

mongoose.model('ShirtForm', shirtSchema);
