import { Server } from "colyseus";
import { uWebSocketsTransport } from "@colyseus/uwebsockets-transport";
import http from "http";
import { GameRoom } from "./rooms/GameRoom.js"; // Importa la stanza

const gameServer = new Server({
  transport: new uWebSocketsTransport()
});

gameServer.listen(2567);
console.log("Server OnePirate online sulla porta 2567!");