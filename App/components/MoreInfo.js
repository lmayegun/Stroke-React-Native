import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';

const MoreInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={{marginTop:20}}>
        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <MaterialCommunityIcons name="dots-vertical" color={'#ffffff'} size={20} style={{marginRight:10}}/>
        </TouchableHighlight>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
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
                style={{ ...styles.closeButton, backgroundColor: "#ffffff" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Entypo name="circle-with-cross" color={'#000000'} size={20}/>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: '#00000077'
  },
  modalView: {
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: 90 +'%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: 'absolute',
  },
  closeButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    right:0,
    position: 'absolute',
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

export default MoreInfo;
