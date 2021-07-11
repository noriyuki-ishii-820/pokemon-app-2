import axios from "axios";

export const deletePokemon = pokemonId => {
 
    return axios
    .delete("/api/deletePokemon/" + pokemonId, {
    })
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

