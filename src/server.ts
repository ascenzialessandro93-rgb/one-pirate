import { Server } from "colyseus";
import { uWebSocketsTransport } from "@colyseus/uwebsockets-transport";
import http from "http";

const gameServer = new Server({
  transport: new uWebSocketsTransport({
    httpServer: http.createServer() // <--- Nota: 'httpServer' invece di 'server'
  })
});

gameServer.listen(2567);
console.log("Server OnePirate online sulla porta 2567!");