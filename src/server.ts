import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/uwebsockets-transport";
import http from "http";

const gameServer = new Server({
  transport: new WebSocketTransport({
    server: http.createServer()
  })
});

// Qui definiremo le stanze (le mappe di gioco)
gameServer.listen(2567);
console.log("Server OnePirate online sulla porta 2567!");