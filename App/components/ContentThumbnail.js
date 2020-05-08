import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const ContentThumbnail = ({title, image, navigation}) => {
  return(
    <View style={[styles.root]}>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
        onPress={()=>{navigation.navigate('Video')}}
        >
        <Image
          style={[styles.image]}
          source={image}
        />
        <View>
          <Text style={{paddingRight: 10, width: 180}}> Content {title} {image}</Text>
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
    marginBottom: 10,
    overflow: 'hidden',
    padding: 10
  },
  image:{
    height: 120,
    width: 200
  }
});

export default withNavigation(ContentThumbnail);
