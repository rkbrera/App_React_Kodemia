import React, { useEffect, useState } from "react";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonBrowser() {
  const pokemonsDb = [
    {
      id: 1,
      name: "bulbasaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 4,
      name: "charmander",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 7,
      name: "squirtle",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 25,
      name: "pikachu",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
  ];

  const [pokemon, setPokemon] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [activePokemon, setActivePokemon] = useState({});

  useEffect(() => {
    console.log("Render");
    setPokemons(pokemonsDb);
  }, []);

  function nextPokemon() {
    if (pokemon > pokemons.length - 1) {
      alert("No more Pokemons");
      return;
    }
    setPokemon(pokemon + 1);
  }

  function previousPokemon() {
    if (pokemon == 0) {
      alert("No more Pokemons");
      return;
    }
    setPokemon(pokemon - 1);
  }

  function insertPokemon(event) {
    event.preventDefault()
    const pokemonId = Number(document.getElementById("pokemonId").value)
    const pokemonName = document.getElementById("pokemonName").value;
    const pokemonSprite = document.getElementById("pokemonSprite").value;
    
    const newPokemon = {
      id: pokemonId,
      name: pokemonName,
      sprite: pokemonSprite,
    }

    setPokemons([...pokemons, newPokemon]) // Tomamos una copia del arreglo que ya esta, y lo unimos con el del nuevo pokemon
    console.log(pokemons)
   
  }


  return (
    <div className="PokemonBrowser">
      {pokemons.length > 0 ? (
        <div>
          <h1>Pokemon Browser</h1>

          <form onSubmit={insertPokemon}>
            <input
              id="pokemonId"
              type="text"
              placeholder="Pokemon ID"
            />
            <input
              id="pokemonName"
              type="text"
              placeholder="Ingresa nombre de pokemon"
            />
            <input
              id="pokemonSprite"
              type="text"
              placeholder="Ingresa sprite de pokemon"
            />
          <button onClick={insertPokemon}>Insertar</button>
          </form>
          {activePokemon.name ? (
            <Pokemon
              name={activePokemon.name}
              id={activePokemon.id}
              sprite={activePokemon.sprite}
            />
          ) : (
            <p>No pokemon selected</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
