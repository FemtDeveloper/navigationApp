import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from '../../themes/appTheme';

type Screen = {
  Pagina2Screen: undefined;
  Pagina1Screen: undefined;
};

type NavigationProps = NativeStackNavigationProp<Screen>;

export const Pagina3Screen = () => {
  const navigator = useNavigation<NavigationProps>();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Página 3 Screen</Text>
      <Button
        title="Ir a Página 2"
        onPress={() => navigator.navigate('Pagina2Screen')}
      />
      <Button title="Ir a Página 1" onPress={() => navigator.popToTop()} />
    </View>
  );
};
