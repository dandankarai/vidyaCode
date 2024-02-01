import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Requests from './Requests/Requests';
import Products from './Prodcuts/Products';
import Customers from './Customers/Customers';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator screenOptions={{headerShadowVisible: false}}>
      <Tab.Screen
        name="Pedidos"
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 17},
        }}
        component={Requests}
      />
      <Tab.Screen name="Clientes" component={Customers} />
      <Tab.Screen name="Produtos" component={Products} />
    </Tab.Navigator>
  );
}
