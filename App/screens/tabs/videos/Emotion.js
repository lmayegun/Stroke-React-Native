import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {VideoThumb} from '../../../components';
import {ActivityLoader} from '../../../components/content';
import {Colors} from '../../../utils/Colors';
import * as Actions from '../../../store/actions/contents/news.actions';

const { width } = Dimensions.get('window');

const Emotion = ({navigation}) => {
  const dispatch = useDispatch();
  const videosData = useSelector( ({videos}) => videos.videosState );
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    dispatch(Actions.getAllVideos());
  },[dispatch])

  useEffect(()=>{
    if( videosData ){
      setVideos(videosData.filter( video => video.category == 'Emotion'));
    }
  },[videosData])

  if( !videos ){
    return <ActivityLoader />
  }

  if( videos.length < 1){
    return <Text> Can't find any video</Text>
  }

  return(
    <View style={[styles.scene]}>
      <FlatList
        vertical={true}
        data={videos}
        keyExtractor={(video)=> video.id}
        renderItem={(video)=>{
          return(
            <VideoThumb
              data={video}
              container={{
                width:100+'%',
                marginRight: 20,
                height: 250,
                marginBottom:10,
                backgroundColor:'white'
              }}
              videoWrapper={{
                width: 100+'%',
                height: 220,
                marginBottom: 5
              }}
              description={{
                color:'black',
              }}
            />
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
    paddingTop: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default withNavigation(Emotion)
