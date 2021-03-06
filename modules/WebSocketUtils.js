const WebSocket = require("ws");

function WSUtils() {
  wsu = {};
  let websocket = {};
  wsu.setupWS = (server) => {
    console.log("Web socket setup");
    const wss = new WebSocket.Server({ server });
    wss.on("connection", (ws) => {
      console.log("New Connection and notifying");
      websocket = ws;
    });
  };

  wsu.notifyClient = (data) => {
    websocket.send(data);
  };
  return wsu;
}

module.exports = WSUtils();
