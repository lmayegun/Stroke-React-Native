import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentThumbnail, FullWidthThumb} from '../../components';
import * as Actions from '../../store/actions/contents/news.actions';

const { width } = Dimensions.get('window');

const TopStories = ({navigation}) => {
  const dispatch = useDispatch();
  const select = useSelector( ({news}) => news.newsState );

  useEffect(()=>{
    dispatch(Actions.getNewsContent({productId: "Get me mac miller"}));
  },[dispatch])

  useEffect(()=>{

  },[select])

  if( !select ){
    return null
  }
  // console.log(select, "mystate")
  return(
    <View style={[styles.scene]}>
      <FlatList
        data={select}
        keyExtractor={(item)=> item.id}
        renderItem={({item, index})=>{
            if( index == 0){
              return(
                <FullWidthThumb />
              )
            }else if( index == 4){
              return(
                <View style={{height:150, justifyContent:'center', color:'white', backgroundColor:'red', marginTop:10}}>
                  <FlatList
                    data={select}
                    horizontal={true}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item)=>{
                      return(
                        <Text> Sample text </Text>
                      )
                    }}
                    />
                </View>
              )
            }else if( index == 10){
              return(
                <View style={{height:150, justifyContent:'center', color:'white', backgroundColor:'red', marginTop:10}}>
                  <FlatList
                    data={select}
                    horizontal={true}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item)=>{
                      return(
                        <Text> Sample text </Text>
                      )
                    }}
                    />
                </View>
              )
            }else{
              return(
                <ContentThumbnail title={item.name} />
              )
            }
          }
        }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: width,
    backgroundColor: '#f0f0f0',
  },
});

export default withNavigation(TopStories)
