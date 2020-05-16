import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentThumbnail, FullWidthThumb, VideoThumb} from '../../components';
import {Colors} from '../../utils/Colors';
import * as Actions from '../../store/actions/contents/news.actions';

const { width } = Dimensions.get('window');

const TopStories = ({navigation}) => {
  const dispatch = useDispatch();
  const contentsData = useSelector( ({news}) => news.newsState );
  const [contents, setContents] = useState(null)

  useEffect(()=>{
    dispatch(Actions.getNewsContent());
  },[dispatch])

  useEffect(()=>{
    setContents(contentsData)
  },[contentsData])

  if( !contents ){
    return null
  }

  return(
    <View style={[styles.scene]}>
      <FlatList
        data={contents}
        keyExtractor={(item)=> item.id}
        renderItem={({item, index})=>{
            if( index == 0){
              return(
                <FullWidthThumb content={item} />
              )
            }else if( index == 5){
              return(
                <View style={{height:150, backgroundColor:Colors.PHYSICAL, marginTop:10, padding:10, }}>
                  <Text style={{ color:'white', marginBottom: 10, fontSize:16}}>EXERCISE VIDEOS</Text>
                  <FlatList
                    data={contents}
                    horizontal={true}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item)=>{
                      return(
                        <VideoThumb />
                      )
                    }}
                    />
                </View>
              )
            }else if( index == 10){
              return(
                <View style={{height:150, backgroundColor:Colors.PRACTICAL, marginTop:10, padding:10, }}>
                  <Text style={{ color:'white', marginBottom: 10, fontSize:16}}>PRACTICAL VIDEOS</Text>
                  <FlatList
                    data={contents}
                    horizontal={true}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item)=>{
                      return(
                        <VideoThumb />
                      )
                    }}
                    />
                </View>
              )
            }else{
              return(
                <ContentThumbnail content={item} />
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
