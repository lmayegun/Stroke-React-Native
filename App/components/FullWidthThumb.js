import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';
import moment from 'moment';

const FullWidthThumb = ({content, navigation})=>{
  const {id, publishedOn, tagName, title, thumbImage, video} = content;

  if(!content){
    return <Text>Loading...</Text>
  }

  return(
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[styles.image]}
        onPress={()=>{navigation.navigate('Content', {id:id} )}}
        >
        <Image
          source={{uri:thumbImage}}
          style={[styles.image]}
          resizeMode="cover"
        />
      </TouchableOpacity>
      {
        video ?
        <FontAwesome name="play-circle" color={'#fff'} size={30} style={[styles.videoIcon]} /> : 
        null
      }
      <View style={[styles.summaryWrapper]}>
        <View style={[styles.tagAndTime]}>
          <Text style={[styles.tag]}> Breaking </Text>
          <MaterialCommunityIcons name="progress-clock" color={'#ccc'} size={20} style={{marginRight: 4}} />
          <Text style={[styles.time]}> {moment(publishedOn, "YYYYMMDD h:mm:ss").fromNow()} </Text>
        </View>
        <View>
          <Text style={[styles.summary]}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

FullWidthThumb.defaultProps = {
  image: require('../assets/images/tash.png'),
  title: 'Example of content title',
  posted: 2
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    position:'relative',
    height: 280,
    backgroundColor: 'white',
    marginBottom:0
  },
  image:{
    flex: 8,
    aspectRatio: 2.5,
  },
  summaryWrapper:{
    display: 'flex',
    flexDirection: 'column',
    flex: 2.5,
    backgroundColor: 'yellow',
    padding:10,
  },
  tagAndTime:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  tag:{
    padding: 2,
    marginRight: 10,
    backgroundColor: 'black',
    color: 'yellow',
    fontSize: 14
  },
  time:{
    fontSize: 12,
    padding: 2,
  },
  summary:{
    fontWeight: '100',
  },
  videoIcon:{
    position: 'absolute',
    top: 160,
    left: 5,

  }
})

export default withNavigation(FullWidthThumb);
