import React, { useState } from "react";

const PlayerInput = () => {
  const [playersState, setPlayersState] = useState([]);
  const [currentPlayerState, setCurrentPlayerState] = useState("");

  const handlePlayerChange = (event) => {
    event.preventDefault();
    playersState.push({
      id: playersState.length + 1,
      name: currentPlayerState,
    });
    setCurrentPlayerState("");
  };

  const handlePlayerNameChange = (event) => {
    const playerName = event.target.value;
    setCurrentPlayerState(playerName);
  };

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
        <button type="submit">Add player</button>
      </form>
    </>
  );
};

export default PlayerInput;
