import React, { useState } from "react";

const PlayerInput = () => {
  let nextId = 0;
  const [playersState, setPlayersState] = useState([]);
  const [currentPlayerState, setCurrentPlayerState] = useState("");

  // let currentPlayers = [];
  const handlePlayerChange = (event) => {
    event.preventDefault();
    playersState.push({
      id: playersState.length + 1,
      name: currentPlayerState,
    });

    console.log(playersState);
    // console.log(currentPlayerState);
    // currentPlayers.push(currentPlayerState);

    // console.log(currentPlayers);
    setCurrentPlayerState("");
  };

  const handlePlayerNameChange = (event) => {
    const playerName = event.target.value;
    setCurrentPlayerState(playerName);
  };

  const handleRandomizer = (event) => {};
  return (
    <>
      <ul>
        {playersState.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
      <form onSubmit={handlePlayerChange}>
        <label>
          Member Name:
          <input
            type="text"
            name="name"
            onChange={handlePlayerNameChange}
            value={currentPlayerState}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PlayerInput;
