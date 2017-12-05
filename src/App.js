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

  rankTeams = () => {
    let rankedTeams = this.props.teams.slice();

    return this.rankByRecord(rankedTeams);
  };

  rankByRecord = (teams) => {
    return teams.sort((a, b) => {
      let recordA = a.wins.length / (a.wins.length + a.losses.length + a.ties.length);
      let recordB = b.wins.length / (b.wins.length + b.losses.length + b.ties.length);

      return recordB - recordA;
    });
  };

  render() {
    return (
      <div className="App">
        <TeamList 
          teams={this.rankTeams()} 
          selectedConference={this.state.selectedConference}
          selectConference={this.selectConference} />
      </div>
    );
  }
}

export default App;
