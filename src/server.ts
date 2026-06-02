import { Server } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport"; // <--- Cambia qui
import http from "http"; // Importa http
import { GameRoom } from "./rooms/GameRoom.js";

const server = http.createServer(); // Crea il server HTTP standard

const gameServer = new Server({
  transport: new WebSocketTransport({
    server: server // Passa il server HTTP qui
  })
});

gameServer.define("pirate_room", GameRoom as any);
gameServer.listen(2567);

console.log("Server OnePirate online sulla porta 2567!");