const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PokemonSchema = new Schema({
    pokemon_name: {
      type: String,
      required: true
    },
    pokemon_img: {
      type: String,
      required: true
    },
    pokemon_type1: {
      type: String,
      required: true
    },
    pokemon_type2: {
      type: String,
      required: true
    },

  });
  
  const Pokemon = mongoose.model("pokemon", PokemonSchema);
  
  module.exports = Pokemon;
  