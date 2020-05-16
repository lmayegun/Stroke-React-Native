import React from 'react';
import {View, Text, StyleSheet, TouchOpacity} from 'react-native';

const VideoThumb = ()=>{
  return(
    <View style={[styles.container]}>
      <View style={[styles.videoWrapper]}>
        <Text> Video </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  videoWrapper:{
    backgroundColor: 'yellow',
    width:150,
    height: 100+'%',
    marginRight: 10
  }
})

export default VideoThumb;
