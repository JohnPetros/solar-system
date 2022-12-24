import { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { PlanetsContext } from '../../context/planetsContext';
import { styles } from './styles';
import { Background } from '../../components/Background/index';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function Planet(props) {
  const [planet] = useContext(PlanetsContext);

  const width = planet.name === 'Saturno' ? 400 : 225;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          style={[styles.planet, { width: width,  }]}
          source={planet.imageBig}
        />
        <View style={styles.information}>
          <View style={styles.status}>
            <View style={styles.statu}>
              <FontAwesome5 name="moon" size={25} color="white" />
              <Text style={styles.statuText}>{planet.moons}</Text>
            </View>
            <View style={styles.statu}>
              <Text style={{ color: '#FFFAFA' }}>Idade</Text>
              <Text style={styles.statuText}>{planet.age} bilhoes</Text>
            </View>
            <View style={styles.statu}>
              <FontAwesome name="thermometer-2" size={25} color="white" />
              <Text style={styles.statuText}>{planet.temperature}°</Text>
            </View>
          </View>

          <Text style={styles.description}>{planet.description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(planet.link)}>
            <Text style={styles.buttonText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}
