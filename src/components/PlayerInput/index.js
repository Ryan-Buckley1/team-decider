import React, { useState } from "react";
import { randomizer } from "../../utils/randomizer";

const PlayerInput = () => {
  const [playersState, setPlayersState] = useState([]);
  const [currentPlayerState, setCurrentPlayerState] = useState("");

  const handlePlayerChange = (event) => {
    event.preventDefault();
    setPlayersState((playersState) => [...playersState, currentPlayerState]);
    // setCurrentPlayerState("");
  };

  const handlePlayerNameChange = (event) => {
    event.preventDefault();
    let playerName = event.target.value;
    setCurrentPlayerState(playerName);
  };

  const [teamState, setTeamState] = useState("");

  const handleTeamChange = (event) => {
    event.preventDefault();
    let teams = event.target.value;
    setTeamState(teams);
  };

  const handleTeamSubmit = (event) => {
    event.preventDefault();
    randomizer(teamState, playersState);
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
          Player Name:
          <input
            type="text"
            name="name"
            onChange={handlePlayerNameChange}
            value={currentPlayerState}
          />
        </label>
        <button type="submit">Add player</button>
      </form>
      <h1> {teamState} Team(s)</h1>
      <form onSubmit={handleTeamSubmit}>
        <div>
          <select onChange={handleTeamChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default PlayerInput;
