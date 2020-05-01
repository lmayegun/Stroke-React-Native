import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const TabHeader = createMaterialTopTabNavigator();

const HomeScreen = ()=> {
  return (
    <TabHeader.Navigator>
      <TabHeader.Screen name="HomeShell1" component={Notifications} />
      <TabHeader.Screen name="Settings2" component={Feed} />
      <TabHeader.Screen name="HomeShell3" component={Notifications} />
      <TabHeader.Screen name="Settings4" component={Feed} />
    </TabHeader.Navigator>
  );
}

export default HomeScreen;
