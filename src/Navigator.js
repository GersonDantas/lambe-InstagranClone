import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screen/Feed';
import AddPhoto from './screen/AddPhoto';
import Profile from './screen/Profile';

const Tab = createBottomTabNavigator();

const MenuRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#019',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPhoto"
        component={AddPhoto}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <MenuRoutes />
    </NavigationContainer>
  );
}
