import React, { Component } from "react";

export default class playerComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const player = <div>Text fom Player</div>;
    return (
      <div className="comptext">
        <h3>Player stuff</h3>
        {this.props.displaytext}
        {player}
      </div>
    );
  }
}
