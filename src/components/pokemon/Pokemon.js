import React from "react";

import "./pokemon.css"

export default function Pokemon (props) {
  return ( 
    <div className="pokemon">
      <h1>Pokemon</h1>
      <p>Pokedex ID: {props.id}</p>
      <p>Pokemon Name: {props.name}</p>
      <img src={props.sprite} alt={props.name} width={300} />
    </div>
  )
}