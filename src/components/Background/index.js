import { ImageBackground, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Space from '../../assets/background.png';

export function Background({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={Space}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
}
