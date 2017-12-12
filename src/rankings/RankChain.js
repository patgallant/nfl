import HeadToHeadHandler    from "./HeadToHeadHandler";

/**
 * Orchestrates rankings of NFL teams using the Chain of Responsibility pattern to
 * process the various tie-breaking rules employed by the NFL.
 */
class RankChain {
    /**
     * Begins handling the chain.
     * @param {RankRequest} request 
     */
    handleRequest(request) {
        // Assemble the rank chain.
        let headToHeadHandler = new HeadToHeadHandler();

        // Begin processing the request with the first handler in the chain.
        headToHeadHandler.handleRequest(request);
    }
}

export default RankChain;