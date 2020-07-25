import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colorPalette} from '../../utils';

const ContentTitle = ({title}) => {
  return(
    <View style={[styles.root]}>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  )
}

ContentTitle.defaultProps = {
  title: "Title",
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colorPalette(),
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:'flex-start',
  },
  title:{
    fontSize: 24
  }
});

export default ContentTitle;
