import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

const image = require('../../assets/images/west.png');

const AdviceAndInfo = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
        <ImageBackground source={image} style={styles.image}>
          <Text> Text </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    padding: 0,
  },
  image: {
    flexGrow: 2,
    resizeMode: "cover",
    height: 150,
    margin: 8,


  },
});

export default AdviceAndInfo;
