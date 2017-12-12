import RankHandler  from "./RankHandler";

class HeadToHeadHandler extends RankHandler {
    /**
     * 
     * @param {RankRequest} request 
     */
    handleRequest(request) {
        if (this.canHandle(request)) {
            let teamOne = request.teams[0];
            let teamTwo = request.teams[1];

            if (this.sweptTeam(teamOne, teamTwo)) {
                request.rankedTeams.push(teamOne);
                request.rankedTeams.push(teamTwo);
                request.teams = [];

                return;
            } else if (this.sweptTeam(teamTwo, teamOne)) {
                request.rankedTeams.push(teamTwo);
                request.rankedTeams.push(teamOne);
                request.teams = [];

                return;
            }
        }

        this.next.handleRequest(request);
    }

    canHandle(request) {
        // In order for this handler to handle the request, there needs to be exactly
        // two teams and they need to have played each other at least once.
        if (request.teams.length === 2) {
            let teamOne = request.teams[0];
            let teamTwo = request.teams[1];

            if (teamOne.wins.indexOf(teamTwo.abbreviation) >= 0 ||
                teamOne.losses.indexOf(teamTwo.abbreviation) >= 0 ||
                teamOne.ties.indexOf(teamTwo.abbreviation) >= 0) {
             
                return true;
            }

            return false;
        }

        return false;
    }

    beatTeam(teamOne, teamTwo) {
        return (teamOne.wins.indexOf(teamTwo.abbreviation) >= 0);
    }

    sweptTeam(teamOne, teamTwo) {
        return (this.beatTeam(teamOne, teamTwo) && !this.beatTeam(teamTwo, teamOne));
    }
}

export default HeadToHeadHandler;