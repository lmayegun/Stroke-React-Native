import React from 'react';
import {Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  HomeStackNavigator,
  CategoriesStackNavigator,
  VideosStackNavigator,
  SearchStackNavigator,
} from './navigator';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Categories: CategoriesStackNavigator,
    Videos: VideosStackNavigator,
    Search: SearchStackNavigator,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      title: 'My Stroke Guide',
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
    navigationOptions:({ navigation }) => ({
      tabBarIcon: ()=>{
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Text>Awesome </Text>;
        }
      }
    })
  },
);

const Navigation = createStackNavigator(
  {
    MainTab: {
      screen: MainTabNavigator
    },
    Edit: {
      screen: SearchStackNavigator,
    },
  },
  {
    initialRouteName: 'MainTab',
  }
);

export default createAppContainer(Navigation);
