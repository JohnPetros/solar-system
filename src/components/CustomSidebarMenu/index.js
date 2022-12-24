import { useContext } from 'react';
import { SafeAreaView, Image, Text, View, FlatList } from 'react-native';

import { PlanetsContext } from '../../context/planetsContext';

import { styles } from './styles';
import { data } from '../../utils/data';

import DrawerButton from '../DrawerButton/index';
import Rocket from '../../assets/rocket.png';

export function CustomSidebarMenu(props) {
  const [, setPlanet] = useContext(PlanetsContext);

  function handleDrawerButton(planet) {
    setPlanet(planet);
    props.navigation.navigate('Planet');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@email.com</Text>
        </View>
      </View>

      <DrawerButton
        name="Home"
        image={Rocket}
        onPress={() => props.navigation.navigate('Home')}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DrawerButton {...item} onPress={() => handleDrawerButton(item)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.drawerButtons}
      />
    </SafeAreaView>
  );
}
