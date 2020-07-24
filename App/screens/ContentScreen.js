import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Text, Modal, TouchableOpacity,   TouchableHighlight} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {ContentTitle, ContentLastUpdated} from '../components/content';
import AppUtils from '../utils/AppUtils';
import * as Actions from '../store/actions/contents/news.actions';

const ContentScreen = ({navigation})=>{
  const contentId = navigation.getParam('id');

  const dispatch = useDispatch();

  const contentData = useSelector( ({content}) => content.contentState );
  const authData = useSelector( ({auth}) => auth.auth );

  const [content, setContent] = useState(null);
  const [modalVisible, setModalVisible] = useState(null);
  const [auth, setAuth] = useState(authData)

  useEffect(()=>{
    dispatch(Actions.cleanContent())
    dispatch(Actions.getContent({contentId:contentId}));
  },[dispatch])

  useEffect(()=>{
    setContent(contentData);
    setAuth(authData);
  },[contentData, authData])

  if(!content){
    return <Text> is loading </Text>;
  }

  navigation.addListener(
    'didBlur',
    payload => {
      setModalVisible(false);
    }
  );

  navigation.addListener(
    'didFocus',
    payload => {
      setModalVisible(content.gated);
    }
  );

  const items = AppUtils.contentComponents(content);

  if( content.gated && auth == false ){
    items.push(
    <View key={items.length + 1} style={[styles.centeredView]}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Permission required</Text>
              <Text style={styles.modalText}>User authentication is required for this content to be view. Make sure you are login or create a new user account.</Text>
              <View style={{display:'flex', flexDirection:'row'}}>
                <TouchableHighlight
                  style={{ ...styles.openButton}}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('CreateAccount');
                  }}
                >
                  <Text style={styles.textStyle}>Create account</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton}}
                  onPress={() => {
                    navigation.navigate('Login')
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton}}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.textStyle}>Go Back</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
    </View>
    )
  }
  return(
    <ScrollView style={[styles.container]}>
      {items}
    </ScrollView>
  )
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
    marginTop: 0,
    backgroundColor: '#00000077'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 2,
    padding: 15,
    width: 85+'%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5
  },
  openButton: {
    padding: 10,
    elevation: 2,
    alignSelf: 'flex-end'
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: "left"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left"
  }
});


export default withNavigation(ContentScreen);
