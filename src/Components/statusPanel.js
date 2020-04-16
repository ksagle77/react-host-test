import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class StatusPanel extends Component {
  render() {
    return (
      <div className="addColumn">
        <div className="col-md-3">
          <Card>
            <Card.Body>{this.props.status}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
