import React, { useState } from 'react';
import { Image, Text, View ,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
  const{onLogin}=useLogin();
  const login=()=>{
    onLogin({email,password});
  }
  return (
    <View style={styles.container}>
        <View>
          <Image style={styles.imagehello} source={require('../../../../assets/img/imghello.png')}/>
          <Text style={styles.textlogin}>Đăng nhập</Text>
        </View>
        <View style={{marginTop:20}}>
          <View style={styles.inputlogin}>
              <FontAwesome5 name="user" style={styles.icon_user}/>
              <TextInput style={styles.inputs}
                  placeholder="Email hoặc tên đăng nhập"
                  placeholderTextColor="#000000"
                  keyboardType="email-address"
                  onChangeText={(email) => setEmail(email)}/>
          </View>
          <View style={styles.inputlogin}>
              <FontAwesome5 name="lock" style={styles.icon_user}/>
              <TextInput style={styles.inputs}
                  placeholder="Mật khẩu"
                  placeholderTextColor="#000000"
                  secureTextEntry={true}
                  onChangeText={(password) => setpassWord(password)}/>
          </View>
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