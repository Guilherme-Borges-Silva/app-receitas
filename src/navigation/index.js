import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import styles from '../styles';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: styles.header,
          headerTintColor: styles.headerTitle.color || 'white',
          headerTitleStyle: styles.headerTitle,
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Buscar Receitas' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
