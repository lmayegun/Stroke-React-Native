import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentTitle, ContentLastUpdated} from '../components/content';
import AppUtils from '../utils/AppUtils';
import * as Actions from '../store/actions/contents/news.actions';

const ContentScreen = ({content, navigation})=>{
  const contentId = navigation.getParam('id');

  const items = AppUtils.contentComponents(content);

  return(
    <ScrollView style={[styles.root]}>
      {items}
    </ScrollView>
  )
}

ContentScreen.defaultProps = {
  content:{
    title: 'Ferrari sign Sainz to replace Vettel',
    updateTime: 'tues 11pm',
    image: require('../assets/images/west.png'),
  }
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 10,
    overflow: 'hidden',
    padding: 0
  },
})

export default withNavigation(ContentScreen);
