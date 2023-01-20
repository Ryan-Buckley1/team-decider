import React, { useState } from "react";

const TeamSelect = () => {
  const [teamState, setTeamState] = useState("");

  const handleTeamChange = (event) => {
    const teams = event.target.value;
    setTeamState(teams);
  };

  return (
    <>
      <h1> {teamState} Team(s)</h1>
      <form>
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

export default TeamSelect;
