const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let called = [];
let timer = 120;

setInterval(() => {
    if(timer > 0) {
        timer--;
        io.emit("timer", timer);
    }
}, 1000);

setInterval(() => {
    let n = Math.floor(Math.random()*75)+1;
    if(!called.includes(n)) {
        called.push(n);
        io.emit("number", n);
    }
}, 4000);

app.get('/', (req, res) => {
    res.send("Bingo Server Running");
});

http.listen(process.env.PORT);
