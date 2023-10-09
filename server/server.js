import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

io.on('connection', (socket) => {

  setInterval(() => {
    let updateData = Math.floor(Math.random() * 100) +1
    socket.emit('update', updateData);
  }, 1000);


  socket.on('chat', (data) => {
    io.emit('chat', data); // Emit the 'chat' event to all connected sockets (including the sender)
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

