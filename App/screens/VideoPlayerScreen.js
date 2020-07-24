import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

import * as Actions from '../store/actions/contents/news.actions';

const VideoPlayerScreen = ({navigation})=>{
  const videoId = navigation.getParam('id');
  const dispatch = useDispatch();
  const videoData = useSelector(({videos})=> videos.videoState );

  const [video, setVideo] = useState(null);

  useEffect(()=>{
    dispatch(Actions.getAvideo({videoId:videoId}))
  },[dispatch])

  useEffect(()=>{
    setVideo(videoData)
  },[videoData]);

  if( !video ){
      return <Text> is loading </Text>
  }

  console.log(video, "vimeo")
  const { width } = Dimensions.get('window');
  return(
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}> React Native Video </Text>
      <Video
        source={video.video}
        shouldPlay={true}
        resizeMode="cover"
        style={{ width, height: 300 }}
        isMuted={false}
        useNativeControls={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});

export default withNavigation(VideoPlayerScreen);
