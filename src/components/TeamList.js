import React, { Component }    from "react";

class TeamList extends Component {

    handleConferenceChange = (e) => {
        this.props.selectConference(e.target.value);
    };

    render() {
        let conferences = [...new Set(this.props.teams.map((team) => team.conference))];

        return (
            <div>
                <h1>All Teams</h1>
                <form>
                    <select title="Conference" id="conferenceSelector" onChange={this.handleConferenceChange}>
                        <option selected={this.props.selectedConference === ""}>{""}</option>
                        {conferences.sort().map((conference, index) => {
                            return (
                                <option selected={this.props.selectedConference === conference}>{conference}</option>
                            );
                        })}
                    </select>
                    <table border="0" cellPadding="2" cellSpacing="0">
                        <tbody>
                        <tr>
                            <th align="left" valign="top">Team</th>
                            <th align="left" valign="top">Conference and Division</th>
                            <th align="center" valign="top">W</th>
                            <th align="center" valign="top">L</th>
                            <th align="center" valign="top">T</th>
                        </tr>
                    {this.props.teams.filter(
                        (team) => {
                            return team.conference === this.props.selectedConference || this.props.selectedConference === ""
                        }).map((team, index) => {
                        return (
                            <tr>
                                <td align="left" valign="top">{team.home}{" "}{team.name}</td>
                                <td align="left" valign="top">{team.conference}{" "}{team.division}</td>
                                <td align="center" valign="top">{team.wins.length}</td>
                                <td align="center" valign="top">{team.losses.length}</td>
                                <td align="center" valign="top">{team.ties.length}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default TeamList;