var rankTeams = (teams) => {

};

var compareTeams = (team1, team2) => {
    if (team1.wins > team2.wins) {
        return team1;
    }

    if (team2.wins > team1.wins) {
        return team2;
    }
};

export default rankTeams;