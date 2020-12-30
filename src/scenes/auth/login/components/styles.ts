import { StyleSheet ,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window')
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagehello:{
        width:320,
        height:320
    },
    texthello:{
        fontWeight:'bold',
        color:"black",
        fontSize:25,
        marginTop:30
    },
    textlogin:{
        fontWeight:'bold',
        color:"#095BA9",
        fontSize:25,
        marginTop:30
    },
    introduce:{
        fontSize:20,
        marginTop:10
    },
    bgbutton:{
        display:'flex',
        flexDirection:'row',
        marginTop:20
    },
    btnlogin:{
        backgroundColor:'#095BA9',
        borderRadius:20,
        width:width/3,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    textbuttonlogin:{
        color:'white',
        fontSize:18
    },
    btnregistor:{
        backgroundColor:'white',
        borderRadius:20,
        width:width/3,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    btngetpass:{
        backgroundColor:'',
        borderRadius:20,
        width:width/3,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    textbuttonresgistor:{
        color:'#095BA9',
        fontSize:18
    },
    inputlogin:{
        width:width-100,
        height:30
    }
});