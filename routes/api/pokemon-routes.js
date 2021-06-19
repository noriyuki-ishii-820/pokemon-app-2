const express = require("express");
const router = express.Router();

// Load User model
const Pokemon = require("../../model/Pokemon");

// add new pokemon to the DB
router.post('/api/addNewPokemon', (req, res) => {
    
    const pokemonData = {
        pokemon_name: req.body.name,
        pokemon_img: req.body.img,
        pokemon_type1: req.body.type1,
        pokemon_type2: req.body.type2,
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