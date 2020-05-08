import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentThumbnail} from '../../components';
import * as Actions from '../../store/actions/contents/news.actions';

const TopStories = ({navigation}) => {
  const dispatch = useDispatch();
  const select = useSelector( ({news}) => news.newsState );

  useEffect(()=>{
    dispatch(Actions.getNewsContent({productId: "Get me mac miller"}));
  },[dispatch])

  useEffect(()=>{

  },[select])

  if( !select ){
    return null
  }
  // console.log(select, "mystate")
  return(
    <View style={[styles.scene]}>
      <FlatList
        data={select}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>{
          return(
            <ContentThumbnail title={item.name} />
          )}
        }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: 380,
    backgroundColor: '#f0f0f0',
  },
});

export default withNavigation(TopStories)
