import { Room, Client } from "colyseus";
import { MyState, Player } from "./schema/MyState.js";

export class GameRoom extends Room<MyState, any> {
    onCreate() {
        this.setState(new MyState());

        // Esempio: Quando un giocatore si muove
        this.onMessage("move", (client, data) => {
            const player = this.state.players.get(client.sessionId);
            player.x = data.x;
            player.y = data.y;
        });
    }

    onJoin(client: Client) {
        console.log("Giocatore entrato:", client.sessionId);
        this.state.players.set(client.sessionId, new Player());
    }

    onLeave(client: Client) {
        this.state.players.delete(client.sessionId);
    }
}