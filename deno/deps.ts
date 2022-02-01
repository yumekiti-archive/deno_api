/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
**/
export {
    serve,
} from "https://deno.land/std@0.122.0/http/server.ts";

import { WebSocketClient, WebSocketServer } from "https://deno.land/x/websocket@v0.1.3/mod.ts";
export type {
    WebSocketClient,
};
export {
    WebSocketServer,
};