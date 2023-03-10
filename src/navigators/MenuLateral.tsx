import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
// import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles, colors} from '../../themes/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width > 768 ? 'permanent' : 'front'}}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" options={{title: 'Home'}} component={Tabs} />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={18} color={colors.primary} />
          <Text style={styles.menuText}>Navegación</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBtn,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="settings-outline" size={18} color={colors.primary} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
