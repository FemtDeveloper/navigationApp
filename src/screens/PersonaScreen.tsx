import React, {useContext, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../../themes/appTheme';
import {RootStackParams} from '../navigators/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  const params = route.params;

  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({title: params.nombre});
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params, null, 3)} usuario
      </Text>

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
