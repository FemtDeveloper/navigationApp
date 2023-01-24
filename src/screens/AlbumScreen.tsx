import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const AlbumScreen = () => {
  const {logout, authState} = useContext(AuthContext);
  return (
    <View>
      <Text>AlbumScreen</Text>
      {authState.isLoggedin && <Button title="Logout" onPress={logout} />}
    </View>
  );
};

export default AlbumScreen;
