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
    <View style={[style.container]}>
      <View style={{ marginBottom: 10 }}>
        <Text>Enter Phone Number</Text>
        <TextInput
          value={phone}
          onChangeText={phone => setPhone({ phone })}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text>Enter Code</Text>
        <TextInput
          value={code}
          onChangeText={code => setCode({ code })}
        />
      </View>

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    padding:20
  }
})

export default LoginScreen;
