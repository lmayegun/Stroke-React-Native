import React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';

const ContentFeatureImage = ({image})=>{
  return(
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
      >
        <Image
          style={[styles.image]}
          source={image}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image:{
    height: 200,
    width: '100%',
  },
});

export default ContentFeatureImage;
