import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import {ContentTitle, ContentLastUpdated} from '../components/content';

const ContentScreen = (props)=>{

  const items = [];
  var i = 0;
  for( item of Object.keys(props.content) ){
    console.log(item)
    switch(item){
      case 'title':{
        items.push(
          <ContentTitle key={i}/>
        )
        break;
      }
      case 'updateTime':{
        items.push(
          <ContentLastUpdated />
        )
        break;
      }
      case 'image':{
        items.push(
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
            >
              <Image
                style={[styles.image]}
                source={props.content.image}
              />
          </TouchableOpacity>
        )
        break;
      }
      default:{
        return <Text></Text>
      }
    }
    i++;
  }

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
  image:{
    height: 200,
    width: '100%'
  },
  title:{

  }

})

export default withNavigation(ContentScreen);
