import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="airplane-outline" size={50} color="green" />
      <Icon name="chatbubble-outline" size={50} color="green" />
    </View>
  );
};

export default Tab1Screen;
