import React from 'react'; 
import {View, Text, StyleSheet, Platform} from 'react-native'; 
import { WebView } from 'react-native-webview';

import {colorPalette} from '../../utils';

const ContentVideo = props =>{
    const { videoUrl } = props; 
    return(
        <View style={[styles.root]}> 
            <Text> Video Title </Text>
            <WebView
                style={[styles.WebViewContainer]}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsFullscreenVideo={true}
                source={{uri: videoUrl }}
            />
        </View>
    )
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

export default ContentVideo; 