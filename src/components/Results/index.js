import React, { useState } from "react";
import { randomizer } from "../../utils/randomizer";

const Results = (teams, players) => {
  const handleRandomizer = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h3> Results!</h3>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team}</li>
        ))}
      </ul>
      <input type={button} onClick={handleRandomizer}>
        Make them teams!
      </input>
    </>
  );
};

export default Results;
