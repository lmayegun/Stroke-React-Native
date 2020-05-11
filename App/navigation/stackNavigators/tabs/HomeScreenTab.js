import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text, TextInput, CheckBox, Picker } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';

import TopStories from '../../../screens/tabs/TopStories';
import MsgHub from '../../../screens/tabs/MsgHub';
import InfoSupport from '../../../screens/tabs/InfoSupport';

const initialLayout = { width: Dimensions.get('window').width};
const renderTabBar = props =>(
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'purple' }}
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
    activeColor={'purple'}
    getLabelText={({ route }) => <Text style={{ padding:0, margin:0, fontSize: 12, fontWeight:'bold'}}> {route.title} </Text>}
    style={{height:'auto', padding:0, backgroundColor:'white'}}
  />
)

const HomeScreenTab = ()=> {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'topStories', title: 'Top Stories' },
    { key: 'msgHub', title: 'My MSG' },
    { key: 'infoSup', title: 'Info & Support' },
    { key: 'help', title: 'Help Using The App' },
  ]);

  const renderScene = SceneMap({
    topStories: TopStories,
    msgHub: MsgHub,
    infoSup: InfoSupport,
    help: Help,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar= { renderTabBar  }
      initialLayout={initialLayout}
    />
  );
}

const Help = () => (
  <View style={[styles.scene, { backgroundColor: 'pink' }]}>
    <Text> Help </Text>
  </View>
);


export default HomeScreenTab

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: '100%'
  },
});
