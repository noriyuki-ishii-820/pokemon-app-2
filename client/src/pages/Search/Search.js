import React, { useEffect, useState } from "react";
import validator from "validator";
import Result from "./Result";

function Search() {
  const [data, setData] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [noResult, setNoResult] = useState(false)
  const [showResults, setShowResults] = useState(false);
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=2000";

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData.results);
    };
    getPokemon();
  }, []);

  const getDetails = async (result) => {
    const response = await fetch(result.url);
    const jsonData = await response.json();
    setPokemon(jsonData);
    console.log(jsonData);
    setShowResults(true);
    setInput("");
  };

  const getByNumber = (input) => {
    data &&
      data.map((result, i) => {
        if (Number(i + 1) === Number(input)) {
          setInputError(false);
          getDetails(result);    
        }else {
          setInputError(true);
          setShowResults(false);
          setInput("");
        }
      });
  };

  const getByAlphabet = (input) => {
    data &&
      data.map((result) => {
        if (result.name === input.toString().toLowerCase()) {
          setInputError(false);
          getDetails(result);
        } else {
          setInputError(true)
          setShowResults(false);
          setInput("");
        }
      });
  };

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
      getByNumber(input);
      setInputError(false);
    } else if (input.includes("-") ) {
      setInputError(false);
      getByAlphabet(input);
    } else if (validator.isAlpha(input)) {
      getByAlphabet(input);
      setInputError(false);
    }else {
      setInputError(true);
      setShowResults(false);
      setInput("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={SearchInput}>
        <input id="input" list="data" value={input} onChange={handleChange} />

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
      {inputError ? (
        <div>
          <h5>
            Input error: please put a valid input (number between 1 and{" "}
            {data.length} or alphabets)
          </h5>
        </div>
      ) : null}
     
      {showResults ? (
        <Result
          id={pokemon.id}
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
          sprites={pokemon.sprites}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ) : null}

    </div>
  );
}

export default Search;
