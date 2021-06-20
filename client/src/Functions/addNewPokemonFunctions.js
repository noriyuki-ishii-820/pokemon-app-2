import axios from "axios";

export const newPokemon = pokeData => {
    return axios
    .post('/api/addNewPokemon', {
        name: pokeData.name, 
        img: pokeData.img,
        type1: pokeData.type1,
        type2: pokeData.type2,
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

