const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors=require('cors')
app.use(cors())
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('connection','ok')
    socket.on('chat message', (msg) => {
        io.emit('chat message', {msg,id:socket.id});
        console.log('message: ' + msg);
      });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

http.listen(3333, () => {
  console.log('listening on *:3333');
});
