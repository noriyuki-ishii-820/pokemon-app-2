import React  from 'react'
import { Bar,PolarArea } from 'react-chartjs-2'


const Result = ({ key, name, height,weight,abilities, sprites,stats,types }) => {

    const totalStat = stats && stats.reduce((total, each) => total + each.base_stat, 0)

    const data = {
        labels: stats && stats.map((each)=>  each.stat.name ),
        datasets: [
            {                                
                data: stats && stats.map((each)=> each.base_stat),
                borderWidth: 0,
                fill:false,
                backgroundColor: 
                [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(201, 203, 207, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 165, 0, 0.7)'
                ],
            }
        ],
    }

const options = {

        type: "polarArea",
        legend: {
            display: false
        },
        animation: {
            duration: 2000, 
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },
        },
        scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                steps:10,
                max: 200
              }
            }],
          
          },
    
    }

return (
        <div className="resultBox">
                <div className="imageBox">
                    <img src={sprites && sprites.front_default} />
                    <img src={sprites && sprites.back_default} />
                    <img src={sprites && sprites.front_shiny} />
                    <img src={sprites && sprites.back_shiny} />
                </div>
                
                <ul className="pokeDataList">
                    <li id={key}>Name: {name && name.charAt(0).toUpperCase() + name.slice(1)}</li>
                    <li>{types && types.length === 1 ? (
                        <span>Type: {types[0].type.name} </span>
                    ) : (
                        <span>Types: 
                            <ul>
                            {types && types.map((each, i) => (
                            <li key={i}>{each.type.name}</li>
                            ))}
                            </ul>
                        </span>
                    )}</li>
                    <li>Height: {height/10} meters</li>
                    <li>Weight: {weight/10} kg</li>
                    <li>{abilities && abilities.length === 1 ? (
                        <span> Ability: {abilities[0].ability.name} </span>
                    ) : (
                        <span>Abilities: 
                            <ul>
                            {abilities && abilities.map((each, i) => (
                            <li key={i}>{each.ability.name}</li>
                            ))}
                            </ul>
                        </span>
                    )}</li>
                    <li> Stats (total of {totalStat})
                        <Bar
                            data={data}
                            options={options}
                            />
                             <PolarArea
                            data={data}
                            options={options}
                            />
                    </li>
            </ul>
        </div>
     
    )
}

export default Result
