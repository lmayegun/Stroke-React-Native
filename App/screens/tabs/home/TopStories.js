import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ActivityLoader} from '../../../components/content';
import {ContentThumbnail, FullWidthThumb, VideoThumb} from '../../../components';
import {Colors} from '../../../utils/Colors';
import * as Actions from '../../../store/actions/contents/news.actions';

const { width } = Dimensions.get('window');

const TopStories = ({navigation, route}) => {
  const dispatch = useDispatch();
  const contentsData = useSelector( ({news}) => news.newsState );
  const videosData = useSelector( ({videos}) => videos.videosState );
  const [contents, setContents] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    dispatch(Actions.getNewsContent());
    dispatch(Actions.getAllVideos());
  },[dispatch])

  useEffect(()=>{
    setContents(contentsData)
    setVideos(videosData)
  },[contentsData, videosData])


  if( !contents ){
    return (
      <ActivityLoader />
    );
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
                <View style={{height:220, backgroundColor:Colors.PHYSICAL, marginTop:10, padding:10, }}>
                  <Text style={{ color:'white', marginBottom: 10, fontSize:16}}>EXERCISE VIDEOS</Text>
                  <FlatList
                    data={videos}
                    horizontal={true}
                    keyExtractor={(video)=> video.id}
                    renderItem={(video)=>{
                      return(
                        <VideoThumb
                          data={video}
                          container={{
                            display:'flex',
                            width:200,
                            marginRight: 20,
                          }}
                          videoWrapper={{
                            backgroundColor: 'yellow',
                            width: 100+'%',
                            height: 120,
                            marginBottom: 5
                          }}
                          description={{
                            color:'white'
                          }}
                        />
                      )
                    }}
                    />
                </View>
              )
            }else if( index == 10){
              return(
                <View style={{height:220, backgroundColor:Colors.PRACTICAL, marginTop:10, padding:10, }}>
                  <Text style={{ color:'white', marginBottom: 10, fontSize:16}}>PRACTICAL VIDEOS</Text>
                  <FlatList
                    data={videos}
                    horizontal={true}
                    keyExtractor={(video)=> video.id}
                    renderItem={(video)=>{
                      return(
                        <VideoThumb
                          data={video}
                          container={{
                            display:'flex',
                            width:200,
                            marginRight: 20,
                          }}
                          videoWrapper={{
                            backgroundColor: 'yellow',
                            width: 100+'%',
                            height: 120,
                            marginBottom: 5
                          }}
                          description={{
                            color:'white'
                          }}
                        />
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
    paddingTop:10,
    paddingBottom:10,
  },
});

export default withNavigation(TopStories)
