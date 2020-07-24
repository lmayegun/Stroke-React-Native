import React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';


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
          <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/YE7VzlLtp-4' }}
            />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image:{
    height: 200,
    width: '100%',
  },
});

export default ContentFeatureImage;
