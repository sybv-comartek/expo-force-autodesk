import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appStart } from '../../redux/actions';
import Index from '../../scenes/auth/login/pages/index';
import StartLogin from '../../scenes/auth/login/components/StartLogin';
import LoginScreen from '../../scenes/auth/login/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export interface BaseLayoutProps {
  children: React.ReactNode;
}

const EmptyLayout = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appStart());
    // eslint-disable-next-line
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Index" component={Index} options={{headerShown:false}} />
        <Stack.Screen name="StartLogin" component={StartLogin} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default EmptyLayout;
