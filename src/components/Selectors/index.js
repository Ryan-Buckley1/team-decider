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
  return <></>;
};
