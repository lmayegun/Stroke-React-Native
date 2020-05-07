import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';
import axios from 'axios';

import {ContentThumbnail} from '../../components';

const params = {orderId:2};
const request = axios.get('/api/e-commerce-app/products');
request.then((response) => {
    console.log(response.data)
  }
)

const TopStories = ({navigation}) => (
  <View style={[styles.scene]}>
    <ContentThumbnail />
  </View>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: 5000,
    backgroundColor: '#fff',
  },
});

export default withNavigation(TopStories)
