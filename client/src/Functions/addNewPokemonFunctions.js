import axios from "axios";

export const addNewPokemon = data => {
 
    return axios
    .post('/api/addNewPokemon', {
        name: data.name, 
        img: data.img,
        type1: data.type1,
        type2: data.type2,
    })
    .catch(err => {
        console.log(err);
    })
}

