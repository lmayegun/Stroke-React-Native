import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Text, Modal, TouchableOpacity,   TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentTitle, ContentLastUpdated} from '../components/content';
import AppUtils from '../utils/AppUtils';
import * as Actions from '../store/actions/contents/news.actions';

const ContentScreen = ({navigation})=>{
  const [modalVisible, setModalVisible] = useState(true);
  const contentId = navigation.getParam('id');
  const dispatch = useDispatch();
  const contentData = useSelector( ({content}) => content.contentState );
  const [content, setContent] = useState(null);

  useEffect(()=>{
    dispatch(Actions.getContent({productId:contentId}));
  },[dispatch])

  useEffect(()=>{
    setContent(contentData);
  },[contentData])

  useEffect(()=>{
    return () => {
      dispatch(Actions.cleanContent())
   }
  },[])

  if(!content){
    return null;
  }

  const items = AppUtils.contentComponents(content);

  if(false){
    return(
      <View style={[styles.centeredView]}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
      </View>
    )
  }else{
    return(
      <ScrollView style={[styles.container]}>
        {items}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 10,
    overflow: 'hidden',
    padding: 0
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'grey'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default withNavigation(ContentScreen);
