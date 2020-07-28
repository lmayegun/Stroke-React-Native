import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentThumbnail, FullWidthThumb, VideoThumb} from '../components';
import {Colors} from '../utils/Colors';
import * as Actions from '../store/actions/contents/news.actions';

const { width } = Dimensions.get('window');

const CategoryScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const contentsData = useSelector( ({news}) => news.contentTypeState );
  const [contents, setContents] = useState(null)

  useEffect(()=>{
    dispatch(Actions.getContentsByTypes({ category: navigation.state.params.name}));
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
    padding:10,
  },
});

export default withNavigation(CategoryScreen)
