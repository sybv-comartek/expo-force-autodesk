import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appStart } from '../../redux/actions';
import Login from '../../scenes/auth/login/pages/index';
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
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default EmptyLayout;
