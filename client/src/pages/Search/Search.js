import React, { useEffect, useState } from "react";
import validator from "validator";

function Search() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=2000";

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    getPokemon();
  }, []);

  const SearchInput = (e) => {
    e.preventDefault();
    var input = document.getElementById("input").value.trim();

    if (
      validator.isInt(input, {
        allow_leading_zeroes: false,
        min: 1,
        max: data.length,
      })
    ) {
      console.log("it's a valid number!", input);
    } else if (validator.isAlpha(input)) {
      console.log("it's a word!");
    } else {
      console.log("to be validated");
    }
  };

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value);
}
  return (
    <div>
      <form onSubmit={SearchInput}>
        <input 
            id="input" 
            list="data"
            onChange={handleChange} />

        
        <datalist id="data">
          {data.map((each, i) => (
            <option
              value={each.name.charAt(0).toUpperCase() + each.name.slice(1)}
              key={i}
            ></option>
          ))}
        </datalist>
        <button variant="contained" id="button" color="primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
