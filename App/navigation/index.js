import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
        VideoPlayerScreen,
        ContentScreen,
        CreateAccountScreen,
        LoginScreen,
        CategoryScreen
}from '../screens';

import {MoreInfo} from '../components';

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
    VideoPlayer:{
      screen:VideoPlayerScreen
    },
    CreateAccount: {
      screen: CreateAccountScreen
    },
    Login:{
      screen: LoginScreen
    },
    Category:{
      screen: CategoryScreen
    },
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
        title: <ScreenTitle nav={navigation}/>,
        headerTitleAlign: 'center',
        headerRight: ()=> <MoreInfo />,
      })
    }
  }
);

// const MoreInfo = ()=>{
//   return(
//     <>
//       <TouchableOpacity
//         onPress={()=>alert("Hiya")}
//       >
//         <MaterialCommunityIcons name="dots-vertical" color={'#ffffff'} size={20} style={{marginRight:10}}/>
//       </TouchableOpacity>
//     </>
//   )
// }

const ScreenTitle = ({nav})=>{
  const {name} = nav.state.params ? nav.state.params : '';
  return(
    <>
    {/*<FontAwesome name="heartbeat" color={'#ffffff'} size={20} />*/}
    <Text style={{color:'white'}}> MSG {name}</Text>
    </>
  )
}

export default createAppContainer(Navigation);
