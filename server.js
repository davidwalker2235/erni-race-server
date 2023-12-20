const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});