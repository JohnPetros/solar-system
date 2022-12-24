import { Image, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function DrawerButton({ name, image, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.right}></View>
    </TouchableOpacity>
  );
}
