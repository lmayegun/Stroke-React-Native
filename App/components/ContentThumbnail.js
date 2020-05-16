import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

import {Colors} from '../utils/Colors';
import TagLabel from './TagLabel';

const ContentThumbnail = ({content, navigation}) => {
  const {id, posted, tagName} = content;
  const { title, thumbnail } = content.body;

  return(
    <View style={[styles.root]}>
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1
      }}
      onPress={()=>{navigation.navigate('Content', {id:id} )}}
      >
        <Image
          source={thumbnail}
          style={[styles.image]}
        />
        <View style={[styles.summary]}>
          <View style={[styles.timeAndTag]}>
            <TagLabel tagName={tagName}/>
            <View style={[styles.time]}>
              <MaterialCommunityIcons name="progress-clock" color={'#ccc'} size={20} style={{marginRight: 4}} />
              <Text>2h ago</Text>
            </View>
          </View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

ContentThumbnail.defaultProps = {
  content:{
    image: require('../assets/images/west.png'),
    name: 'Example of content title',
    posted: 2
  }
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    padding: 10,
    justifyContent:'flex-start',
  },
  image:{
    height: 120,
    flex: 2
  },
  summary:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    flex: 3
  },
  timeAndTag:{
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 5
  },
  tag:{
    paddingRight: 0,
    paddingLeft: 6,
    marginRight: 2,
    flex: 2,
    backgroundColor: Colors.PRIMARY,
    color: 'white'
  },
  time:{
    paddingRight: 10,
    flex: 4,
    display: 'flex',
    flexDirection: 'row'
  }
});

export default withNavigation(ContentThumbnail);
