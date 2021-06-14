import React from 'react'

const Result = ({ key, name, height,weight,abilities, sprites,stats,types }) => {
    return (
        <div>
            <h1> {name}</h1>
            <img src={sprites.front_default} />
            <img src={sprites.front_shiny} />
        </div>
    )
}

export default Result
