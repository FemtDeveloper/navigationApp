import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../../themes/appTheme';
import {RootStackParams} from '../navigators/StackNavigator';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, [navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>

      <Button
        title="Ir a Página 1"
        onPress={() => navigation.navigate('Pagina1Screen')}
      />
      <Button
        title="Ir a Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Button
        title="Ir a Página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
