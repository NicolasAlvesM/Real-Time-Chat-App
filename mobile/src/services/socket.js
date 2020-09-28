import io from 'socket.io-client'
const socket=io('http://192.168.0.109:3333', {
    transports: ['websocket'], 
    jsonp: false 
  });
socket.on('connection',msg=>{
    console.log('Connected')
});
export default socket
