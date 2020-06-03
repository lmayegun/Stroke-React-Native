import React, { useState, Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import firebase from 'firebase';

import * as Actions from '../store/actions/auth/auth.actions';

const LoginScreen = ()=>{
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  function handleSubmit(){
    dispatch(Actions.login({phone, code}))
  }

  return(
    <View style={[styles.container]}>
      <View style={{ marginBottom: 10 }}>
      <Text style={{
                    textAlign:'center',
                    fontSize:24,
                    fontWeight:'bold',
                    marginBottom:10
                  }}>Log In</Text>
        <Text style={[styles.label]}>Enter Phone Number</Text>
        <TextInput
          value={phone}
          onChangeText={phone => setPhone({ phone })}
          style={[styles.textInput]}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={[styles.label]}>Enter Code</Text>
        <TextInput
          value={code}
          onChangeText={code => setCode({ code })}
          style={[styles.textInput]}
        />
      </View>

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  label:{
    marginTop:5,
    fontWeight:'bold',
  },
  textInput:{
    marginTop:4,
    marginBottom:10,
    borderBottomWidth:1,
    paddingLeft:5
  }
})

export default LoginScreen;
