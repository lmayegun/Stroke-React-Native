import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TagLabel = ({tagName})=>{

  let backgroundColor = 'yellow';

  switch (tagName) {
    case 'Exclusive':
      backgroundColor = 'purple';
      break;
    case 'Aphasia':
      backgroundColor = 'blue';
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
