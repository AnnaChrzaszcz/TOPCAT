const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    surname: {
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
    size: Number,
    model: String
});

mongoose.model('ShoesForm', shoesSchema);
