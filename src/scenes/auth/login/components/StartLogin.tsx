import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from './styles'
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  navigation?:any
}

const StartLogin: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagehello} source={require('../../../../assets/img/imghello.png')}/>
      <Text style={styles.texthello}>Xin chào!</Text>
      <Text style={styles.introduce}>Chào mừng bạn đến với</Text>
      <Text style={styles.introduce}>Force Autodesk</Text>
      <View style={styles.bgbutton}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("LoginScreen")} style={styles.btnlogin}>
          <Text style={styles.textbuttonlogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnregistor}>
          <Text style={styles.textbuttonresgistor}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// styles

export default StartLogin;