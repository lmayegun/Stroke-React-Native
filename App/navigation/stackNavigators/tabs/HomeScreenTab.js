import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, Button, Text, TextInput, CheckBox, Picker } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';

import TopStories from '../../../screens/tabs/home/TopStories';
import Events from '../../../screens/tabs/home/Events';
import InfoSupport from '../../../screens/tabs/home/InfoSupport';

const initialLayout = { width: Dimensions.get('window').width};
const renderTabBar = props =>(
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#5b358c' }}
    tabStyle={{
      margin: 0,
      padding: 0,
      width: 150
    }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color, margin: 0, padding: 0 }}>
        {route.title}
      </Text>
    )}
    bounce={true}
    scrollEnabled={true}
    inactiveColor={'#000000'}
    activeColor={'#5b358c'}
    getLabelText={({ route }) => <Text style={{ padding:0, margin:0, fontSize: 12, fontWeight:'bold'}}> {route.title} </Text>}
    style={{height:'auto', padding:0, backgroundColor:'white'}}
  />
)

const HomeScreenTab = ()=> {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'topStories', title: 'Top Stories' },
    { key: 'events', title: 'Event and Challenges' },
    { key: 'infoSup', title: 'Info & Support' },
  ]);

  const renderScene = SceneMap({
    topStories: TopStories,
    events: Events,
    infoSup: InfoSupport,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar= { renderTabBar  }
      initialLayout={initialLayout}
      lazy={true}
    />
  );
}

export default HomeScreenTab

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: '100%'
  },
});
