import { Server } from "socket.io";
import express from "express";
import {createServer} from 'http';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app= express();
const server= createServer(app); 
const io = new Server(server);

let onlineUsers = 0;

io.on("connection", (sockets) => {
    onlineUsers++;
    io.emit("updateUserCount", onlineUsers);

    console.log("A user connected. Online users:", onlineUsers);

    sockets.on("disconnect", () => {
        onlineUsers--;
        io.emit("updateUserCount", onlineUsers);
        console.log("A user disconnected. Online users:", onlineUsers);
    });
});



const __dirname = dirname(fileURLToPath(import.meta.url));


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// app.use(express.static(__dirname + "/index.html"))

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');


});

