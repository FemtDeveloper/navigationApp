import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
// import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'black',
      }}>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
};
