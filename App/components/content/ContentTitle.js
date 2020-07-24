import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import { WebView } from 'react-native-webview';

import {colorPalette} from '../../utils';

const ContentTitle = ({title}) => {
  return(
    <View style={[styles.root]}>
      <Text style={[styles.title]}>{title}</Text>
      <WebView
        style={ styles.WebViewContainer }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        source={{uri: 'https://www.youtube.com/embed/YE7VzlLtp-4' }}
      />
    </View>
  )
}

ContentTitle.defaultProps = {
  title: "Title",
}

const styles = StyleSheet.create({
  root:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colorPalette(),
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent:'flex-start',
    minHeight: 300
  },
  title:{
    fontSize: 24
  },
  WebViewContainer:{
    marginTop: (Platform.OS == 'android') ? 20 : 0,
   }
});

export default ContentTitle;
