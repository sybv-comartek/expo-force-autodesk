import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import useLogin from '../hooks/useLogin';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  navigation?:any
}
const Login: React.FC<Props> = props => {
  const [email, setEmail] = useState('');
  const [password, setpassWord] = useState('');
  const login=()=>{
    onLogin({email,password});
  }
  const{onLogin}=useLogin();
  return (
    <View style={styles.container}>
        <View>
          <Image style={styles.imagehello} source={require('../../../../assets/img/loginimg.svg')}/>
          <Text style={styles.textlogin}>Đăng nhập</Text>
        </View>
        <View style={{marginTop:20}}>
          <Input
            onChangeText={(value)=>{setEmail(value)}}
            placeholder='Email'
            style={styles.inputlogin}
            leftIcon={{ type: 'font-awesome', name: 'envelope',color:'#A7A7A7' }}
          />
          <Input
            onChangeText={(value)=>{setpassWord(value)}}
            placeholder='Password'
            style={styles.inputlogin}
            leftIcon={{ type: 'font-awesome', name: 'key',color:'#A7A7A7' }}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity onPress={login} style={styles.btnlogin}>
            <Text style={styles.textbuttonlogin}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btngetpass}>
            <Text style={styles.textbuttonresgistor}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

// styles

export default Login;