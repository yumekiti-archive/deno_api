import { serve } from './deps.ts';

export default function(){

    function handler(req: Request): Response {
        return new Response("Hello, World!");
    }

    serve(handler, { port: 8080 });

}