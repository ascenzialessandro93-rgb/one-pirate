import { Server } from "colyseus";
import { uWebSocketsTransport } from "@colyseus/uwebsockets-transport";
import http from "http";

const gameServer = new Server({
  transport: new uWebSocketsTransport({ // Anche qui cambia il nome
    server: http.createServer()
  })
});

// Qui definiremo le stanze (le mappe di gioco)
gameServer.listen(2567);
console.log("Server OnePirate online sulla porta 2567!");