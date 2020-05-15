import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Colors} from '../utils/Colors';

const TagLabel = ({tagName})=>{

  let backgroundColor = Colors.WHITE;

  switch (tagName) {
    case 'Exclusive':
      backgroundColor = Colors.PRIMARY;
      break;
    case 'Aphasia':
      backgroundColor = Colors.APHASIA;
      break;
    case 'Physical':
      backgroundColor = Colors.PHYSICAL;
      break;
    case 'Emotional':
      backgroundColor = Colors.EMOTIONAL;
      break;
    case 'Practical':
      backgroundColor = Colors.PRACTICAL;
      break;
    default:
      backgroundColor = 'green';
  }

  return(
    <View>
      <Text style={[styles.tag, {backgroundColor: backgroundColor}]}>{tagName}</Text>
    </View>
  )
}

TagLabel.defaultProps = {
  tagName: 'Exclusive',
}

const styles = StyleSheet.create({
  tag:{
    paddingRight: 6,
    paddingLeft: 6,
    marginRight: 2,
    flex: 2,
    color: 'white'
  },
});

export default TagLabel;
