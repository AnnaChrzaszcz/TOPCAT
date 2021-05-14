const express = require('express');
const mongoose = require('mongoose');
const ShoesForm = mongoose.model('ShoesForm');

const router = express.Router();

router.post('/shoesForm', async (req, res) => {
    const {
        name,
        surname,
        team,
        mail,
        size,
        model
    } = req.body;
    console.log('tworze shoes form');
    try{
        const shoesForm = new ShoesForm(
            {name,
                surname,
                team,
                mail,
                size,
                model});
        await shoesForm.save();
        res.send(shoesForm);
    }
    catch(err){
        return res.status(422).send({error: err})
    }
});

router.get('/shoesForm/findAll', async (req, res) => {
    try{
        const shoesForms = await ShoesForm.find();
        res.send(shoesForms);
    }
    catch(err){
        return res.status(404).send({error: err})
    }
});

router.get('/shoesForm/findByTeam', async (req, res) => {
    try{
        const team = req.query.team;
        const shoesForms = await ShoesForm.find({team: team});
        res.send(shoesForms);
    }
    catch(err){
        return res.status(404).send({error: err})
    }
});



module.exports = router;
