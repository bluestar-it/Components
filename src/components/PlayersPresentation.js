import React, { Component } from "react";

export default function PlayersPresentation({ players }) {
  console.log(players);

  return (
    <div className="container">
      {players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img}></img>
            <h4>{player.name}</h4>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
