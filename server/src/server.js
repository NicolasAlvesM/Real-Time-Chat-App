const express = require('express');
const app=express()
const cors=require('cors')
app.use(cors())
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const users=[]
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('newUser',(user,roomName)=>{
    socket.join(roomName)
    users[socket.id]=user
    socket.on('chat message', (msg) => {
      io.to(roomName).emit('chat message', {name:users[socket.id],msg,id:socket.id});
      });
  })
  socket.emit('connection','ok')
  socket.on('disconnect', () => {
    console.log('user disconnected');
    delete users[socket.id]
  });
});
http.listen(3333);