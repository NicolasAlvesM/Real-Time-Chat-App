import React,{useState,useEffect} from 'react';
import {Text, View,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles'
import socket from './services/socket'
function ChatApp(){
    const [isRoomSelected,setIsRoomSelected]=useState(false)
    const [roomName,setIsRoomName]=useState('')
    const [texto,setTexto]=useState('')
    const [lista,setLista]=useState([])
    const [user,setUser]=useState('')
    function handleRoom(){
        setIsRoomSelected(true)
        socket.emit('newUser',user,roomName)
    }
    function submit() {
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
    return(
        <View className="App">

      {!isRoomSelected&&<View style={styles.inputBlock}>
        <View style={styles.inputView}>
            <TextInput style={styles.inputs} placeholder="Nome De Usuario" value={user} onChangeText={e=>setUser(e)}/>
        </View>
        <View style={styles.inputView}>
            <TextInput style={styles.inputs} placeholder="Nome Da Sala" value={roomName} onChangeText={e=>setIsRoomName(e)}/>
        </View>
        <TouchableOpacity style={styles.formbutton} onPress={handleRoom}><Text>Salvar</Text></TouchableOpacity>
      </View>}
      {isRoomSelected&&<View style={styles.messages}>
      <View>
        {lista.map((item,index)=>{
          return <View style={item.id===socket.id? styles.myMessages:styles.other} key={index}><Text style={styles.text}>{item.id===socket.id?'':item.name+":  "}{item.msg}</Text></View>
        })}
      </View>
        <View style={styles.sendMessages} >
        <TextInput style={styles.inputs} value={texto} onChangeText={e=>setTexto(e)}/>
        <TouchableOpacity style={styles.messageButton} onPress={submit}><Text>Enviar</Text></TouchableOpacity>
        </View>
    </View>
   }
   </View>
    )
}
export default ChatApp