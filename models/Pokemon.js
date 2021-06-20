const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PokemonSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type1: {
      type: String,
      required: true
    },
    type2: {
      type: String,
      required: true
    },

  });
  
  const PokemonModel = mongoose.model("pokemon", PokemonSchema);
  
  module.exports = PokemonModel;
  