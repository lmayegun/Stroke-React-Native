import React from 'react';
import {Text, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  HomeStackNavigator,
  CategoriesStackNavigator,
  VideosStackNavigator,
  SearchStackNavigator,
} from './stackNavigators';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Categories: CategoriesStackNavigator,
    Videos: VideosStackNavigator,
    Search: SearchStackNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
            return <FontAwesome name="home" color={"grey"} size={20} />;
        } else if (routeName === 'Categories') {
            return <Text>Categories</Text>;
        }
        // You can return any component that you like here!
        return <Text>Icon</Text>;
      },
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      title: 'My Stroke Guide',
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'white',
      },
    },
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
    defaultNavigationOptions: ({navigation})=>{
      const { routeName } = navigation.state;
      return({
        headerStyle: {
          height: 80,
          backgroundColor: 'white'
        },
        title: <FontAwesome name="home" color={'#8e44ad'} size={20} />,
        headerTitleAlign: 'center',
        headerRight: ()=><Text>Extra Info</Text>
      })
    }
  }
);

Navigation

export default createAppContainer(Navigation);
