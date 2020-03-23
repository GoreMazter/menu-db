import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './pages/Menu';
import Alta from './pages/Alta';
import Baja from './pages/Baja';
import Busca from './pages/Busca'
import Cambio from './pages/Cambio';
const Stack = createStackNavigator();

function Body() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Alta" component={Alta} />
        <Stack.Screen name="Baja" component={Baja} />
        <Stack.Screen name="Busca" component={Busca} />
        <Stack.Screen name="Cambio" component={Cambio} />
        
      </Stack.Navigator>
  );
}

export default Body;
