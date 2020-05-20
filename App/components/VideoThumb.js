import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const VideoThumb = ({navigation, container, videoWrapper, description})=>{
  return(
    <View style={[styles.container, container]}>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('VideoPlayer')}}
        >
        <ImageBackground
          source={require('../assets/images/frank-ocean.jpg')}
          style={[styles.videoWrapper, videoWrapper]}>
          <FontAwesome name="play-circle" color={'#fff'} size={30} style={[styles.videoIcon]} />
          <Text > Video </Text>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={[description]}>To watch a video, click on the video and it.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  videoWrapper:{

  },
  videoIcon:{
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
})

export default withNavigation(VideoThumb);
