import React, { Component } from "react";
import Panel from "react-bootstrap/lib/Panel";
import Button from "react-bootstrap/lib/Button";
import playerInfo from "./playerComp";

export default class lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: 0
    };
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    if (!this.state.numberOfPlayers) return <p>Waiting for dongers</p>;
    return (
      <div classname="addColumn">
        <div className="col-md-3">
          <Panel bsStyle="info" className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Status</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{player.guid}</p>
            </Panel.Body>
          </Panel>
          ))}
        </div>
      </div>
    );
  }
}
