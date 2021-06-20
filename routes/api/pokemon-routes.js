const express = require("express");
const router = express.Router();

// Load model
const Pokemon = require("../../models/Pokemon");

// add new pokemon to the DB
router.post('/api/addNewPokemon', (req, res) => {
    
    const pokemonData = {
        name: req.body.name,
        img: req.body.img,
        type1: req.body.type1,
        type2: req.body.type2,
    }

    Pokemon.create(pokemonData)
    .then(pokemonInfo => {
        res.json(pokemonInfo);
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;