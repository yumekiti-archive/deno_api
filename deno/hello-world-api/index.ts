import { serve } from '../deps.ts';

export default function(){

    // function handler(req: Request): Response {
    //     return new Response("Hello, World!");
    // }

    // serve(handler, { port: 8080 });

    console.log("http://localhost:8000/");
    serve((req) => new Response("Hello World\n"), { port: 8000 });

}