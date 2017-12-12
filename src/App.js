import "./App.css";

import React          from "react";
import { Component }  from "react";

import TeamList       from "./components/TeamList";
import rankTeams      from "./Rankings";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedConference: ""
    }
  }

  selectConference = (conference) => {
    this.setState({
      selectedConference: conference
    })
  };

  oldRankTeams = () => {
    let rankedTeams = this.props.teams.slice();

    return this.rankByRecord(rankedTeams);
  };

  getRecord = (team) => {
    if (team.wins.length + team.losses.length + team.ties.length === 0) {
      return 0;
    }

    return team.wins.length / (team.wins.length + team.losses.length + team.ties.length);
  };

  rankByRecord = (teams) => {
    return teams.sort((a, b) => {
      let recordComparison = this.getRecord(b) - this.getRecord(a);
      return recordComparison;
    });
  };

  areInSameDivision = (teamOne, teamTwo) => {
    return (teamOne.conference === teamTwo.conference) && (teamOne.division === teamTwo.division);
  };

  rankTeams2 = () => {
  };

  render() {
    return (
      <div className="App">
        <TeamList 
          teams={rankTeams(this.props.teams)} 
          selectedConference={this.state.selectedConference}
          selectConference={this.selectConference} />
      </div>
    );
  }
}

export default App;
