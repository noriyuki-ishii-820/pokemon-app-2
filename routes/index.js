const path = require("path");
const router = require("express").Router();
const apiPokemonRoutes = require("./api/pokemon-routes");

// API Routes
router.use(apiPokemonRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
module.exports = router;