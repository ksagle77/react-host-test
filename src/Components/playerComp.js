import React, { Component } from "react";

export default class playerComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = <div>This is the players stuff</div>;
    return (
      <div className="playerInfo">
        <h3>First Component</h3>
        {this.props.playerName}
        {element}
      </div>
    );
  }
}
