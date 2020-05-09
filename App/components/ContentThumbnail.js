import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const ContentThumbnail = ({title, image, navigation}) => {
  return(
    <View style={[styles.root]}>
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1
      }}
      onPress={()=>{navigation.navigate('Content')}}
      >
        <Image
          source={image}
          style={[styles.image]}
        />
        <View style={[styles.summary]}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginBottom: 5
          }}>
            <Text style={{paddingRight: 0, paddingLeft: 6, marginRight: 2, flex: 2, backgroundColor: 'purple', color: 'white'}}>Exclusive</Text>
            <View style={{paddingRight: 10, flex: 4, display: 'flex', flexDirection: 'row'}}>
              <MaterialCommunityIcons name="progress-clock" color={'#ccc'} size={20} style={{marginRight: 4}} />
              <Text>3h ago</Text>
            </View>
          </View>
          <Text style={{paddingRight: 0}}>Content {title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

ContentThumbnail.defaultProps = {
  image: require('../assets/images/west.png')
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
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
  }
});

export default withNavigation(ContentThumbnail);
