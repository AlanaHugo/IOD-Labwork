const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (index.html)
app.use(express.static('public'));

const users = {}; // socket.id => nickname

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle setting nickname
  socket.on('set-nickname', (nickname) => {
    users[socket.id] = nickname;
    io.emit('user-list', Object.values(users)); // update online users
    socket.broadcast.emit('user-joined', nickname);
  });

  // Handle chat messages
  socket.on('chat-message', (msg) => {
    const nickname = users[socket.id];
    socket.broadcast.emit('chat-message', { nickname, msg });
    socket.emit('my-message', { msg }); // direct message to sender
  });

  // Typing event
  socket.on('typing', () => {
    socket.broadcast.emit('typing', users[socket.id]);
  });

  socket.on('stop-typing', () => {
    socket.broadcast.emit('stop-typing', users[socket.id]);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    const nickname = users[socket.id];
    delete users[socket.id];
    io.emit('user-list', Object.values(users)); // update online users
    socket.broadcast.emit('user-left', nickname);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
