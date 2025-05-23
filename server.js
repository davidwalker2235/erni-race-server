const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: {origin: "*"}});

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
