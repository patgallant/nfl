import RankHandler  from "./RankHandler";

class RecordHandler extends RankHandler {
    canHandle(request) {
        return request.teams.length > 0;
    }

    handleRequest(request) {
        if (this.canHandle(request)) {
            request.rankedTeams = this.rankTeams(request.teams);
        }

        if (!this.rankingComplete()) {
            this.next.handleRequest(request);
        }
    }

    getRecord(team) {
        if (team.wins.length + team.losses.length + team.ties.length === 0) {
          return 0;
        }
    
        return team.wins.length / (team.wins.length + team.losses.length + team.ties.length);
    }

    insertTeam(team, rankedTeams) {
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
    }

    rankTeams(teams) {
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
    }
}

export default RecordHandler;