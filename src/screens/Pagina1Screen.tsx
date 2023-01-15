import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Página 1 (uno) Screen</Text>

      <Button
        title="Ir a Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Button
        title="Ir a Página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
      <Button
        title="Ir a Persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      />

      <Text>Navegar con argumentos</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{...styles.btnPersona, backgroundColor: 'purple'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.btnPersonaTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnPersona}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.btnPersonaTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
