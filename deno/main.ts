// console.log("Welcome to Deno!");

import { serve } from "https://deno.land/std@0.122.0/http/server.ts";

function handler(req: Request): Response {
    return new Response("Hello, World!");
}

serve(handler, { port: 8080 });