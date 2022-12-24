import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Planet } from '../screens/Planet';

import { NavigationDrawerStructure } from './DrawerNavigation';

import { PlanetsContext } from '../context/planetsContext';
const Stack = createStackNavigator();

export function HomeStackNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Sistema Solar',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
          headerTintColor: '#FFFAFA',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function PlanetStackNavigation({ navigation }) {
  const [planet] = useContext(PlanetsContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Planet"
        component={Planet}
        options={{
          title: planet.name,
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
          headerTintColor: '#FFFAFA',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
