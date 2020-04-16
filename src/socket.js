import socket from "socket.io-client";

function connectToDongful() {
  socket = io("https://dongful.dev.sagle.ca", {
    autoConnect: false
  });
}
