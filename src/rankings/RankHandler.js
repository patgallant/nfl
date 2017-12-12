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
}

export default RankHandler;