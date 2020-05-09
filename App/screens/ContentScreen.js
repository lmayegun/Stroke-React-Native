import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const ContentScreen = ({title, image, navigation})=>{
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
      </TouchableOpacity>
      <Text> Description </Text>
    </View>
  )
}

ContentScreen.defaultProps = {
  image: require('../assets/images/west.png')
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 10,
    overflow: 'hidden',
    padding: 10
  },
  image:{
    height: 200,
    width: '100%'
  }
})

export default withNavigation(ContentScreen);
