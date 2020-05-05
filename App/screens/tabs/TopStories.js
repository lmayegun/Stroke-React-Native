import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';

const text = "Top Stories sdhjdghj djhdsh jdhdsh";
const TopStories = ({navigation}) => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]}>
    <Text>{text}</Text>
    <Text>
    {text}
    {"\n"}
    {"\n"}
    {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: 5000
  },
});

export default withNavigation(TopStories)
