// OBSOLETE.

var rankTeams = (teams) => {
    let rankedTeams = [];

    for (var i = 0; i < teams.length; i++) {
        let team = teams[i];
        console.log(team.name);
        
        if (rankedTeams.length === 0) {
            rankedTeams.push(team);
        }

        else {
            rankedTeams = insertTeam(team, rankedTeams);
        }
    }

    return rankedTeams;
};

var insertTeam = (team, rankedTeams) => {
    let updatedTeams = [];
    let teamInserted = false;
    
    for (var i = 0; i < rankedTeams.length; i++) {
        let rankedTeam = rankedTeams[i];
        if (getRecord(team) > getRecord(rankedTeam) && !teamInserted) {
            updatedTeams.push(team);
            updatedTeams.push(rankedTeam);

            teamInserted = true;
        } else {
            updatedTeams.push(rankedTeam);
        }
    }

    if (!teamInserted) {
        updatedTeams.push(team);
    }

    return updatedTeams;
};

var getRecord = (team) => {
    if (team.wins.length + team.losses.length + team.ties.length === 0) {
      return 0;
    }

    return team.wins.length / (team.wins.length + team.losses.length + team.ties.length);
};

var beatTeam = (teamOne, teamTwo) => {
    return teamOne.wins.indexOf(teamTwo.abbreviation) > -1;
};

var sweptTeam = (teamOne, teamTwo) => {
    return beatTeam(teamOne, teamTwo) && !beatTeam(teamTwo, teamOne);
};

export default rankTeams;