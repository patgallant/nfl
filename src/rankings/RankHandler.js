/**
 * Base class used for ranking teams.
 */
class RankHandler {

    /**
     * Creates a new instance of RankHandler.
     */
    constructor() {
        this.next = {
            handleRequest = (request) => {
                console.log("All handlers executed");
            }
        };
    }

    /**
     * Determines if a handler can handle a request.
     */
    canHandle(request) {
        return false;
    }

    /**
     * Sets the next handler in the chain.
     * @param {RankHandler} handler 
     */
    setNext(handler) {
        this.next = handler;
        return handler;
    }

    /**
     * Handles the request.
     * @param {RankRequest} request 
     */
    handleRequest(request) {}

    rankingComplete(request) {
        return (request.teams.length === 0 && request.rankedTeams.length === 32);
    }

    beatTeam(teamOne, teamTwo) {
        return (teamOne.wins.indexOf(teamTwo.abbreviation) >= 0);
    }

    sweptTeam(teamOne, teamTwo) {
        return (this.beatTeam(teamOne, teamTwo) && !this.beatTeam(teamTwo, teamOne));
    }

    inSameDivision(teams) {
        if (teams.length > 0) {
            let conference = teams[0].conference;
            let division = teams[0].division;

            for (let i = 1; i < teams.length; i++) {
                if (teams[i].conference != conference ||
                    teams[i].division != division) {
                        return false;
                }
            }

            return true;
        }

        return false;
    }
}

export default RankHandler;