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

  render() {
    return (
      <div className="App">
        <TeamList 
          teams={this.props.teams} 
          selectedConference={this.state.selectedConference}
          selectConference={this.selectConference} />
      </div>
    );
  }
}

export default App;
