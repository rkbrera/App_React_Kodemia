import React, { useEffect, useState } from "react";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonBrowser() {
    const [pokemon, setPokemon] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [activePokemon, setActivePokemon] = useState({});

    useEffect(() => {
        const pokemonsNames = ["bulbasaur", "charmander", "squirtle", "pikachu"];

        async function getPokemonData() {
            const pokemons = pokemonsNames.map(async (pokemonName) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const data = await response.json();
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default,
                    types: data.types.map(typeData => typeData.type.name)
                }

                console.log("Getting pokemon", pokemon.name);

                return pokemon;
            });

            setPokemons(await Promise.all(pokemons));
        }

        getPokemonData();


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

    function searchPokemon() {
        const pokemonName = (document.getElementById("pokemonName").value).toLowerCase();
    
        const pokemon = pokemons.find(pokemon => pokemon.name === pokemonName);
        if (pokemon) {
            console.log(pokemons);
            setActivePokemon(pokemon);
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(response => response.json())
                .then(async data => {
                    const pokemon = {
                        id: data.id,
                        name: data.name,
                        sprite: data.sprites.front_default,
                        types: data.types.map(typeData =>  {typeData.type.name}) // Obtén los tipos
                    };
    
                    setPokemons([...pokemons, pokemon]);
                    console.log(pokemons);
    
                    setActivePokemon(pokemon);
                })
                .catch(error => {
                    alert("Pokemon not found");
                });
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
                                <Pokemon name={activePokemon.name} id={activePokemon.id} sprite={activePokemon.sprite} type={activePokemon.types} />
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