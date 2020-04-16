import React, { Component } from "react";
import logo from "../public/images/logo.png";
import "./App.css";
import "./styles.css";
import FirstComponent from "./Components/playerComp";
import Status from "./Components/statusPanel";
import io from "socket.io-client";
var socket = "";

class App extends Component {
  constructor() {
    super();
    this.state = {
      connectionStatus: "disconnected",
      players: 0,
      server: "https://dongful.dev.sagle.ca/"
    };

    this.setConnectionStatus = this.setConnectionStatus.bind(this);
  }

  componentDidMount() {
    const { server } = this.state;
    console.log(`connecting to ${server}`);
    socket = io(server);
    socket.on("connect", function() {
      setConnectionStatus("connected");
    });
  }

  setConnectionStatus(status) {
    this.setState({
      connectionStatus: status
    });
  }

  render() {
    const { connectionStatus } = this.state;
    return (
      <div className="App">
        <header className="dongful-header">
          <img src={logo} className="dongful-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dongtown</h1>
        </header>
        <FirstComponent playerName="FirstPlayerInfo" />
        <Status status={connectionStatus} />
      </div>
    );
  }
}
export default App;
