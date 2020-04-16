import io from "socket.io-client";
var socket = "";

const connectToServer = async server => {
  socket = io(server);
  configureSocket(socket);
};

const configureSocket = async => {
  socket.on("hello", msg => {
    console.log(msg);
  });
};

const emitToSocket = async (msg, data) => {
  socket.emit(msg, data);
};

exports.connectToServer = connectToServer;
exports.emitToSocket = emitToSocket;
