import React from 'react';
import {Text, Alert, Image} from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
        VideoPlayerScreen,
        ContentScreen,
        CreateAccountScreen,
        LoginScreen
}from '../screens';

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
            return <MaterialIcons name="group-work" color={"grey"} size={20} />;;
        } else if (routeName === 'Videos') {
            return <Entypo name="folder-video" color={"grey"} size={20} />;;
        } else if (routeName === 'Search') {
            return <MaterialCommunityIcons name="magnify" color={"grey"} size={20} />;;
        }
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
    Content: {
      screen: ContentScreen,
    },
    Video:{
      screen:VideoPlayerScreen
    },
    CreateAccount: {
      screen: CreateAccountScreen
    },
    Login:{
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'MainTab',
    defaultNavigationOptions: ({navigation})=>{
      const { routeName } = navigation.state;
      return({
        headerStyle: {
          height: 80,
          backgroundColor: 'purple',
        },
        title: <FontAwesome name="heartbeat" color={'#ffffff'} size={20} />,
        headerTitleAlign: 'center',
        headerRight: ()=><MaterialCommunityIcons name="dots-vertical" color={'#ffffff'} size={20}/>,
      })
    }
  }
);

Navigation

export default createAppContainer(Navigation);
