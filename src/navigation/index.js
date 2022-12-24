import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigation} from "./DrawerNavigation"

export function Navigation() {
  return (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
  )
}