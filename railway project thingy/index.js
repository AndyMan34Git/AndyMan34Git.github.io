const WebSocket = require("ws");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Start HTTP server on a dynamic port assigned by Railway
const server = app.listen(process.env.PORT || 3000, () => 
    console.log(`Server running on port ${server.address().port}`)
);

const wss = new WebSocket.Server({ server });

let clients = new Set();

wss.on("connection", (ws) => {
    clients.add(ws);
    ws.on("close", () => clients.delete(ws));
});

app.post("/send", (req, res) => {
    let { code } = req.body;
    if (!code) return res.status(400).send("No code provided.");
    
    clients.forEach(client => client.send(code));
    res.send("Code sent!");
});
