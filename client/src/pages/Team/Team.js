import React, { useEffect, useState } from "react";
import { getTeamList } from "../../Functions/getTeamFunctions";
import { deletePokemon } from "../../Functions/deleteTeamFunctions"


function Team() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeamList().then(data => {
            setTeam(data.data)
        })
      }, []);

    function removePokemon (e) {
        var result = window.confirm("Are you sure to remove this Pokemon from the team?")
        let pokemonId = e.target.attributes.getNamedItem("value").value

        console.log(pokemonId)
        if (result){
            deletePokemon(pokemonId)
            window.location.reload();
        }
    }


    return (
        <div>
            <h1> this is the team page</h1>
            {team.map((each,i) => {
                 return  <div>
                            <li key={i}>{each.name} <img src={each.img}></img><button value={each._id} onClick={(e) => removePokemon(e)}>x</button></li>
                            
                        </div>
               })}
        </div>
    )
}

export default Team
