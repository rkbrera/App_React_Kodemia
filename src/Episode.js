import React from "react";

export default function Episode (props) {
  

  return ( 
    <div className="Episode">
      <h1>Episode</h1>
      <p>Episode: {props.episode}</p>
      <p>Episode: {props.name}</p>
      <img src={props.cover} alt={props.name} width={300} />
    </div>
  )
}