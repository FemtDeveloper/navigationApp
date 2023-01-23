/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigators/StackNavigator';
// import {MenuLateralBasico} from './src/navigators/MenuLateralBasico';
import {MenuLateral} from './src/navigators/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <AuthProvider>
        <MenuLateral />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
