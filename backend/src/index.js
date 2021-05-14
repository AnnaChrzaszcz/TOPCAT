require('./models/ShirtForm');
require('./models/ShoesForm');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const shirtFormRoutes= require('./routes/shirtFormRoutes');
const shoesFormRoutes= require('./routes/shoesformRoutes');

const app = express();

app.use(bodyParser.json());
app.use(shirtFormRoutes);
app.use(shoesFormRoutes);

const mongoUri = 'mongodb+srv://ZWR:jebacrjp@topcat.rprvg.mongodb.net/TOPCAT?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err);
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

app.get('/', (req, res) => {
    res.send('ELO MORDY');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

