import React, { useState } from "react";

const Selectors = () => {
  const [playersState, setPlayersState] = useState("");
  const [teamState, setTeamState] = useState("");

  const handlePlayerChange = (event) => {
    const players = event.target.value;
    setPlayersState(players);
  };

  const handleTeamChange = (event) => {
    const teams = event.target.value;
    setTeamState(teams);
  };

  const handleRandomizer = (event) => {};
  return (
    <>
      <form onSubmit={handleTeamChange}>
        <div>
          <select>
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

export default TeamSelect;
