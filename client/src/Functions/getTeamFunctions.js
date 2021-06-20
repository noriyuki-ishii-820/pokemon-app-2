import axios from "axios";

export const getTeamList = data => {
 
    return axios
    .get('/api/getTeam', {
    })
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(err);
    })
}

