import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colorPalette} from '../../utils';

const ContentLastUpdated = ({dateTime}) => {
  return(
    <View style={[styles.root]}>
      <Text style={[styles.dateTime]}>Last Updated: {dateTime}</Text>
    </View>
  )
}

ContentLastUpdated.defaultProps = {
  dateTime: "14/05/20 1:49pm",
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colorPalette(),
    marginBottom: 10,
    padding: 10,
    justifyContent:'flex-start',
  },
  dateTime:{
    fontSize: 12
  }
});

export default ContentLastUpdated;
