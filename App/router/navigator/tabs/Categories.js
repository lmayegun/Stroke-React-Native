import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const SecondRoute1 = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props =>(
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    indicatorContainerStyle={{
      height:50000,
      background: 'red'
    }}
    bounce={true}
    scrollEnabled={true}
  />
)

export default function Categories() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'first1', title: 'First' },
    { key: 'second2', title: 'Second' },
    { key: 'first3', title: 'First' },
    { key: 'second4', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    first1: FirstRoute,
    second2: SecondRoute1,
    first3: FirstRoute,
    second4: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar= { renderTabBar  }
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: 5000
  },
});
