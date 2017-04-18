var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var wss = new WebSocketServer({ port: 9080 });

var lastMsg = null;
var wsClients = [];
wss.on('connection', function connection(ws) {
  wsClients.push(ws);
  //ws.onclose = (e => wsClients.)
  ws.on('message', function incoming(message) {
    lastMsg = message;
    //ws.send(message);
    console.log('rec', new Date().getTime());
    //console.log(wss.clients);
    wss.clients.forEach(function each(client) {
        if (client != ws && client.readyState === WebSocket.OPEN) {
          console.log(new Date().getTime(), 'send')
          client.send(message);
        }
      });
  });

});
wss.on('error', e => console.log(e))