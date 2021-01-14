import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor:'#095BA9',
      justifyContent:"center",
      alignItems:"center"
    },
    tinyLogo:{
      width:90,
      height:70 
    },
    buttons: {
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'stretch',
      alignSelf: 'center',
      borderWidth: 5,
    },
    button: {
      flex: 1,
      paddingVertical: 0,
    },
    greeting: {
      color: '#999',
      fontWeight: 'bold',
    },
  });