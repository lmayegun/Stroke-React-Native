import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const ContentThumbnail = ({title}) => {
  return(
    <View style={[styles.root]}>
      <Text> Content {title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    marginBottom: 10,
  }
});

export default withNavigation(ContentThumbnail);
