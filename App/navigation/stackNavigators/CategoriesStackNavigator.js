import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import {withNavigation} from 'react-navigation';

const categories = [
  {
    title: 'Aphasia',
    bgImg: require('../../assets/images/contents/thumbnail/purple-gradient.jpg'),
    link:'aphasia'
  },
  {
    title: 'Emotion',
    bgImg: require('../../assets/images/contents/thumbnail/purple-gradient.jpg'),
    link: 'emotion'
  },
  {
    title: 'Physical',
    bgImg: require('../../assets/images/contents/thumbnail/purple-gradient.jpg'),
    link: 'exercise'
  },
  {
    title: 'Practical',
    bgImg: require('../../assets/images/contents/thumbnail/purple-gradient.jpg'),
    link: 'exercise'
  },
  {
    title: 'Covid 19',
    bgImg: require('../../assets/images/contents/thumbnail/purple-gradient.jpg'),
    link: 'exercise'
  },
  {
    title: 'Survivors',
    bgImg: require('../../assets/images/contents/thumbnail/purple-gradient.jpg'),
    link: 'exercise'
  }
]

const Categories = ({navigation}) => {
  return (
      <View style={styles.container}>
      <FlatList
        data={categories}
        vertical={true}
        numColumns={2}
        keyExtractor={(item)=> item.title}
        renderItem={(item)=>{
          const { title, bgImg, link } = item.item
          return(
            <TouchableOpacity
              style={styles.link}
              onPress={()=>{navigation.navigate('Category', {name:title})}}
            >
              <ImageBackground source={bgImg} style={styles.image}>
                <Text style={styles.title}> {title} </Text>
              </ImageBackground>
            </TouchableOpacity>
          )
        }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
  link:{
    flex:1,
    flexDirection: 'row',
    marginRight: 10
  },
  image: {
    resizeMode: "cover",
    height: 180,
    margin: 8,
    alignItems:'center',
    width: 100+'%',
  },
  title:{
    fontSize:24,
    fontWeight:"900",
    color:'white',
    position:'absolute',
    bottom:10
  }

});

export default withNavigation(Categories);
