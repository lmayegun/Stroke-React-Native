import * as React from 'react';
import { View, StyleSheet, Button, Text, ImageBackground, Dimensions } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

import {colorPalette} from '../../utils';

const image = { uri: "https://i.pinimg.com/originals/11/c0/0c/11c00c702d268a5a7789e801f995fbcc.gif" };

const { width } = Dimensions.get('window');
const centerImageSize = width / 3;

const MsgHub = ( {naviagtion}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.lineone}>INTRODUCING</Text>
        <Text style={styles.text}>MY STROKE GUIDE</Text>
        <FontAwesome name="heartbeat" size={centerImageSize} style={styles.icon}/>
        <Text style={styles.summary}>Create your own news feed by choosing teams, stars, experts and sports</Text>
        <Text style={styles.summary}>All you need is a free account</Text>
        <View>
        <Button
          title={'Create account'}
        />
        <Button
          title={'Log in'}
        />
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingTop:20,
    paddingLeft:60,
    paddingRight:60,
    justifyContent: 'flex-start',
  },
  lineone: {
    color:'white',
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: 'center',
    marginBottom: 2,
  },
  icon: {
    color:'white',
    fontWeight: "bold",
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  summary: {
    color: "white",
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default withNavigation(MsgHub);
