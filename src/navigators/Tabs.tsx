import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import {Platform, Text} from 'react-native';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsIOS />;
};

// const BottomTabAndroid = createMaterialBottomTabNavigator();

// const TabsAndroid = () => {
//   return (
//     <BottomTabAndroid.Navigator>
//       <BottomTabAndroid.Screen
//         name="Tab1Screen"
//         options={{
//           title: 'Tab1',
//           // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
//         }}
//         component={Tab1Screen}
//       />
//       <BottomTabAndroid.Screen
//         name="Tab2Screen"
//         options={{title: 'Tab2'}}
//         component={Tab2Screen}
//       />
//       <BottomTabAndroid.Screen
//         name="StackNavigator"
//         options={{title: 'Stack'}}
//         component={StackNavigator}
//       />
//     </BottomTabAndroid.Navigator>
//   );
// };

const BottomTabIOS = createBottomTabNavigator();

// export const Tabs = () => {
export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;

            default:
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: 'yellow',
        tabBarActiveBackgroundColor: 'green',
      })}
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
