import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './redux/store';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
        <Stack.Navigator initialRouteName="Products"  screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Products" component={ProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      
    </Provider>
  );
}
