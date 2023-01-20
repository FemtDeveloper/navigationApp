import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {colors} from '../../themes/appTheme';
import {Text} from 'react-native';
import {colors} from '../../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
        elevation: 0,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: JSX.Element = <Text />;
          switch (route.name) {
            case 'Chat':
              iconName = (
                <Icon
                  name="chatbubble-outline"
                  size={18}
                  color={colors.primary}
                />
              );
              break;
            case 'Contact':
              iconName = (
                <Icon name="people-outline" size={18} color={colors.primary} />
              );
              break;
            case 'Album':
              iconName = (
                <Icon name="albums-outline" size={18} color={colors.primary} />
              );
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
        // tabBarPressColor: colors.primary,
        // tabBarStyle: {borderBottomWidth: 0, borderWidth: 0, elevation: 0},
        // tabBarIndicatorStyle: {backgroundColor: 'red'},
        //   tabBarShowIcon: true,
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
