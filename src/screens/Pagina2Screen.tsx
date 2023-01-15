import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}
export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({title: 'Hola Hola', headerBackTitle: 'Atrás'});
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Página 2 Screen</Text>
      <Button
        title="Ir a Página 1"
        onPress={() => navigation.navigate('Pagina1Screen')}
      />
      <Button
        title="Ir a Página 3"
        onPress={() => navigation.navigate('Pagina1Screen')}
      />
    </View>
  );
};
