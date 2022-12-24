import { Image, Text, View, TouchableOpacity } from 'react-native';

import {styles} from "./styles"

export function HomeButton({ image, style, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles[style]}>
      <Image source={image} />
    </TouchableOpacity>
  );
}
