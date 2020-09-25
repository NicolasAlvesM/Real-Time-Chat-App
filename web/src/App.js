import React,{useState,useEffect} from 'react';
import io from 'socket.io-client'
import './App.css';
const socket=io('http://localhost:3333')
socket.on('connection',msg=>{
  console.log('Connected')
});
function App() {
  const [texto,setTexto]=useState('')
  const [lista,setLista]=useState([])
function submit(e) {
  e.preventDefault();
  socket.emit('chat message', texto)
  socket.off('chat message', texto)
  setTexto('');
  return false;
};
useEffect(()=>{
  const handleNewMessage=newItem=>setLista([...lista,newItem])
  socket.on('chat message',handleNewMessage)
  return ()=>socket.off('chat message',handleNewMessage)
},[lista])
  return  (
    <div className="App">
      <header className="App-header">
      <ul id="messages">
        {lista.map((item,index)=>{
          return <li className={item.id===socket.id?'myMessage':'other'} key={index}>{item.msg}</li>
        })}
      </ul>
    <form onSubmit={submit} id='form' action="">
      <input value={texto} onChange={e=>setTexto(e.target.value)} id="m"/><button>Send</button>
    </form>
      </header>
    </div>
  );
}

export default App;
