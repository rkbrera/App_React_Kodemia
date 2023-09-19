import React, { useEffect, useState } from "react";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonBrowser() {
    const pokemonsDb = [{
        id: 1,
        name: "bulbasaur",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        id: 4,
        name: "charmander",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        id: 7,
        name: "squirtle",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        id: 25,
        name: "pikachu",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }];

    const [pokemon, setPokemon] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [activePokemon, setActivePokemon] = useState({});

    useEffect(() => {
        console.log("Render")
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

    function searchPokemon(){
        const pokemonName = document.getElementById("pokemonName").value;
        console.log(pokemonName);

        const pokemonFound = pokemonsDb.find(pokemon => pokemon.name.toLowerCase() === pokemonName.toLowerCase());
        if(pokemonFound){
            setActivePokemon(pokemonFound);
        }else{
            alert("Pokemon not found");
        }
    }

    return (
        <div className="PokemonBrowser">
            {
                pokemons.length > 0 ? (
                    <div>
                        <h1>Pokemon Browser</h1>
                        <input id="pokemonName" type="text" placeholder="Ingresa nombre de pokemon" />
                        <button onClick={searchPokemon}>Buscar pokemon</button>
                        {
                            activePokemon.name ? (
                                <Pokemon name={activePokemon.name} id={activePokemon.id} sprite={activePokemon.sprite} />
                            ) : (
                                <p>No pokemon selected</p>
                            )
                        }
                    </div>
                ) : (<p>Loading...</p>)
            }
        </div>
    );
}