const express = require('express');
const mongoose = require('mongoose');
const ShirtForm = mongoose.model('ShirtForm');

const router = express.Router();

router.post('/shirtForm', async (req, res) => {
    const {
        name,
        surname,
        team,
        mail,
        size,
        model
    } = req.body;
    console.log('tworze shirt form');
    try{
        const shirtForm = new ShirtForm(
            {name,
            surname,
            team,
            mail,
            size,
            model});
        await shirtForm.save();
        res.send(shirtForm);
    }
    catch(err){
        return res.status(422).send({error: err})
    }
});

router.get('/shirtForm/findAll', async (req, res) => {
    try{
        const shirtForms = await ShirtForm.find();
        res.send(shirtForms);
    }
    catch(err){
        return res.status(404).send({error: err})
    }
});

router.get('/shirtForm/findByTeam', async (req, res) => {
    try{
        const team = req.query.team;
        const shirtForms = await ShirtForm.find({team: team});
        res.send(shirtForms);
    }
    catch(err){
        return res.status(404).send({error: err})
    }
});



module.exports = router;
