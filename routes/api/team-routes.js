const express = require("express");
const router = express.Router();

// Load model
const Pokemon = require("../../models/Pokemon");

// add new pokemon to the DB

router.get('/api/getTeam', (req, res) => {
    Pokemon.find()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json({ error: "Users do not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

module.exports = router;