import { Room, Client } from "colyseus";
import { MyState, Player } from "./schema/MyState.js";

export class GameRoom extends (Room as any)<MyState> {
    onCreate() {
        this.setState(new MyState());

        // Gestione del messaggio "move"
        this.onMessage("move", (client, data) => {
            const player = this.state.players.get(client.sessionId);
            
            // Dobbiamo controllare che 'player' esista prima di modificarlo
            if (player) {
                player.x = data.x;
                player.y = data.y;
            }
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