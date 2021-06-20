import React, { useEffect, useState } from "react";
import { getTeamList } from "../../Functions/getTeamFunctions"


function Team() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        getTeamList().then(data => {
            setTeam(data.data)
        })
      }, []);

      console.log(team)
    return (
        <div>
            <h1> this is the team page</h1>
            {team.map((each,i) => {
                 return  <div>
                            <li key={i}>{each.name} <img src={each.img}></img></li>
                            
                        </div>
               })}
        </div>
    )
}

export default Team
