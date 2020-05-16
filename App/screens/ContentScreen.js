import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentTitle, ContentLastUpdated} from '../components/content';
import AppUtils from '../utils/AppUtils';
import * as Actions from '../store/actions/contents/news.actions';

const ContentScreen = ({navigation})=>{
  const contentId = navigation.getParam('id');
  const dispatch = useDispatch();
  const contentData = useSelector( ({content}) => content.contentState );
  const [content, setContent] = useState(null);

  useEffect(()=>{
    dispatch(Actions.getContent({productId:contentId}));
  },[dispatch])

  useEffect(()=>{
    setContent(contentData);
  },[contentData])

  if(!content){
    return null;
  }

  const items = AppUtils.contentComponents(content);

  return(
    <ScrollView style={[styles.root]}>
      {items}
    </ScrollView>
  )
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
