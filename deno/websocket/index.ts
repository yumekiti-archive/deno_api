import { WebSocketClient, WebSocketServer } from "../deps.ts";

export default function(){

    const wss = new WebSocketServer(8080);

    wss.on("connection", function (ws: WebSocketClient) {
        ws.on("message", function (message: string) {
            console.log(message);
            ws.send(message);
        });
    });

}