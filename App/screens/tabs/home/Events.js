import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ActivityLoader} from '../../../components/content';
import {ContentThumbnail, FullWidthThumb, VideoThumb} from '../../../components';
import {Colors} from '../../../utils/Colors';
import * as Actions from '../../../store/actions/contents/news.actions';

const { width } = Dimensions.get('window');

const Events = ({navigation, route}) => {
  const dispatch = useDispatch();
  const contentsData = useSelector( ({news}) => news.newsState );
  const videosData = useSelector( ({videos}) => videos.videosState );
  const [contents, setContents] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    dispatch(Actions.getNewsContent());
    dispatch(Actions.getAllVideos());
  },[dispatch])

  useEffect(()=>{
    setContents(contentsData)
    setVideos(videosData)
  },[contentsData, videosData])

  if( !contents ){
    return (
      <ActivityLoader />
    );
  }

  return(
    <View style={[styles.scene]}>
      <FlatList
        data={contents}
        keyExtractor={(item)=> item.id}
        renderItem={({item, index})=>{
          return(
            <ContentThumbnail content={item} />
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: width,
    backgroundColor: '#f0f0f0',
    paddingTop:5,
    paddingBottom:10,
  },
});

export default withNavigation(Events)
