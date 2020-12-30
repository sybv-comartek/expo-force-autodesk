import React,{useEffect} from 'react';
import {styles} from './styles';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  navigation?:any
}  

const Login: React.FC<Props> = (props) => {
  let rotateValueHolder = new Animated.Value(0);
  useEffect(()=>{
    startImageRotateFunction();
  },[])
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() =>{
      setTimeout(() => {
        props.navigation.navigate("StartLogin");
      }, 300);
    });
  };
  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Animated.Image
            style={{
              width: 100,
              height: 90,
              transform: [{rotate: rotateData}],
            }}
            source={require('../../../../assets/img/logo.png')}
          />
        </View>
      </SafeAreaView>
  );
};

// styles

export default Login;