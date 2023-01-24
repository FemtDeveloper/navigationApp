import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../themes/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <View
        style={{
          ...styles.globalMargin,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="alarm-outline" />
        <TouchableIcon iconName="chatbubble-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="archive-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="at-circle-outline" />
      </View>
    </View>
  );
};

export default Tab1Screen;
