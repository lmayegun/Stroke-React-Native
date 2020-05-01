import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

import {HomeScreen,
        Categories,
        Profile,
        Videos} from './navigator';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTabs = ()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      shifting={true}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#e91e63' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        activeColor="#000000"
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore-o" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        activeColor="#000000"
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color }) => (
            <Entypo name="video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#e91e63',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <MainBottomTabs />
    </NavigationContainer>
  );
}
