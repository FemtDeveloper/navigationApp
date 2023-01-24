import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

const ContactScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Signin</Text>
      {!authState.isLoggedin && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};

export default ContactScreen;
