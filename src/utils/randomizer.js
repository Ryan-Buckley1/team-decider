const shuffle = function (array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const randomizer = function (players, teams) {
  const maxTeamSize = players.length / teams;
  //shuffle players then assign to teams in order.
  shuffle(players);
  const completedTeams = () =>
    players.length > maxTeamSize
      ? [
          players.slice(0, maxTeamSize),
          ...completedTeams(players.slice(maxTeamSize), maxTeamSize),
        ]
      : [players];
};
