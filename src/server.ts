import { app } from "./app";

app.listen({
    port: 3333,
    host: "0.0.0.0" //to avoid issues with any client that connects to this server
}).then(() => {
    console.log("🎃 Server listening on port 3333");
})