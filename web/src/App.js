import React,{useState,useEffect} from 'react';
import './App.css';
import socket from './services/socket'
function App() {
  const [isRoomSelected,setIsRoomSelected]=useState(false)
  const [roomName,setIsRoomName]=useState('')
  const [texto,setTexto]=useState('')
  const [lista,setLista]=useState([])
  const [user,setUser]=useState('')
function submit(e) {
  e.preventDefault();
  socket.emit('chat message', texto)
  socket.off('chat message', texto)
  setTexto('');
  return false;
};
function handleRoom(){
  setIsRoomSelected(true)
  socket.emit('newUser',user,roomName)
}
useEffect(()=>{
  const handleNewMessage=newItem=>setLista([...lista,newItem])
  socket.on('chat message',handleNewMessage)
  return ()=>socket.off('chat message',handleNewMessage)
},[lista])
  return  (
    <div className="App">
      {!isRoomSelected&&<div className="inputs">
        <label htmlFor="">Nome De Usuario</label>
        <input value={user} onChange={e=>setUser(e.target.value)} type="text" name=""/>
        <label htmlFor="">Nome Da Sala</label>
        <input value={roomName} onChange={e=>setIsRoomName(e.target.value)} type="text" name="" />
        <input onClick={handleRoom} type="button" value="Salvar"/>
      </div>}
      <header className="App-header">
      <ul id="messages">
        {lista.map((item,index)=>{
          return <li className={item.id===socket.id?'myMessage':'other'} key={index}>{item.id===socket.id?'me':item.name}:{item.msg}</li>
        })}
      </ul>
    {isRoomSelected&&<form onSubmit={submit} id='form' action="">
      <input value={texto} onChange={e=>setTexto(e.target.value)} id="m"/><button>Send</button>
    </form>}
      </header>
    </div>
  );
}

export default App;
