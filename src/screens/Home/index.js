import { useContext } from 'react';
import { View, Image } from 'react-native';
import { PlanetsContext } from '../../context/planetsContext';
import { Background } from '../../components/Background/index';
import { HomeButton } from '../../components/HomeButton/index';
import { data } from '../../utils/data';
import { styles } from './styles';

import Sun from '../../assets/Sun.png';

export function Home({ navigation }) {
  const [planet, setPlanet] = useContext(PlanetsContext);

  function handleHomeButton(planetId) {
    setPlanet(data[planetId]);
    navigation.navigate('Planet');
  }
  
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.planets}>
          <Image source={Sun} />
          {data.map((planet) => (
            <HomeButton
              image={planet.image}
              style={planet.style}
              onPress={() => handleHomeButton(planet.id)}
            />
          ))}
        </View>
      </View>
    </Background>
  );
}
