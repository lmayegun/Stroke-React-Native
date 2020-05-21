import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text, TextInput, CheckBox, Picker } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';

import Aphasia from '../../../screens/tabs/videos/Aphasia';
import Practical from '../../../screens/tabs/videos/Practical';
import Emotion from '../../../screens/tabs/videos/Emotion';
import Physical from '../../../screens/tabs/videos/Physical';

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

const VideoScreenTab = ()=> {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'aphasia', title: 'Aphasia' },
    { key: 'physical', title: 'Physical' },
    { key: 'emotion', title: 'Emotion' },
    { key: 'practical', title: 'Practical' },
  ]);

  const renderScene = SceneMap({
    aphasia: Aphasia,
    practical: Practical,
    physical: Physical,
    emotion: Emotion,
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


export default VideoScreenTab

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: '100%'
  },
});
