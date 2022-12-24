import { TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigation } from './StackNavigation';
import { CustomSidebarMenu } from '../components/CustomSidebarMenu/index';

import { PlanetStackNavigation } from './StackNavigation';


const Drawer = createDrawerNavigator();

export const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};
export function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigation}
      />
      <Drawer.Screen
        name="Planet"
        component={PlanetStackNavigation}
      />
    </Drawer.Navigator>
  );
}
