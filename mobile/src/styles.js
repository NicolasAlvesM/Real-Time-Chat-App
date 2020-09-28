import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    inputBlock:{
        backgroundColor : '#5555ff',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
    },
    inputs:{
        backgroundColor:'#fff',
        flex:1,
        textAlign:'center',
        marginVertical:5,
        borderRadius:8,
        height:40,
        borderWidth:1
    },
    formbutton :{ 
        backgroundColor: '#82a4ff', 
        height:40,
        width:'100%',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    messages:{ 
        height:'100%'
    },
    inputView:{
        flexDirection:'row'
    },
    sendMessages:{
    position: 'absolute' , 
    bottom:0, 
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    },
    messageButton:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0ff',
        width:60,
        marginLeft:5,
        height:40,
        borderRadius:8
    },
    messagesBlock:{
        marginVertical:5,
    },  
    messages :{ 
        paddingTop:30,
        paddingHorizontal:5,
        backgroundColor:'#d9d9d9',
        height:'100%',
      },
    myMessages :{ alignItems:'flex-end',marginVertical:2},
    text:{
        fontSize:18,
        backgroundColor:'#0ff',
        paddingVertical:5,
        borderRadius:8,
        paddingHorizontal:10
    },
    other:{
        marginVertical:2,
        alignItems:'flex-start'
    }
  });
  export default styles