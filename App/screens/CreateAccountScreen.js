import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-ff413.cloudfunctions.net';

class CreateAccountScreen extends Component {
  state = {
    phone: '',
    title: 'Mr',
    firstName: '',
    lastName: '',
    email: '',
  };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: '+44'+this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: '+44'+this.state.phone });
    } catch (err) {
      console.log(err)
      alert("failed");
    }
  }

  render() {

    return (
      <View style={[styles.container]}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{
                        textAlign:'center',
                        fontSize:24,
                        fontWeight:'bold',
                        marginBottom:10
                      }}>Create An Account</Text>
          <Text style={[styles.label]}>Title</Text>
          <Picker
           selectedValue={this.state.title}
           style={{ height: 40, width: 100+'%'}}
           onValueChange={(itemValue, itemIndex) =>{
             this.firstName.focus()
             return(
               this.setState({title:itemValue})
             )
           }}
          >
           <Picker.Item label="Mr" value="Mr" />
           <Picker.Item label="Mrs" value="Mrs" />
          </Picker>
          <Text style={[styles.label]}>First name</Text>
          <TextInput
            style={[styles.textInput]}
            value={this.state.firstName}
            ref={ref => (this.firstName = ref)}
            onSubmitEditing={() => {
              this.lastName.focus()
            }}
            onChangeText={firstName=> this.setState({firstName})}
            returnKeyType="next"
          />
          <Text style={[styles.label]}>Last name</Text>
          <TextInput
            style={[styles.textInput]}
            value={this.state.lastName}
            ref={ref => (this.lastName = ref)}
            onSubmitEditing={() => {
              this.email.focus()
            }}
            onChangeText={lastName=> this.setState({lastName})}
            returnKeyType="next"
          />
          <Text style={[styles.label]}>Email Address</Text>
          <TextInput
            style={[styles.textInput]}
            value={this.state.email}
            ref={ref => (this.email = ref)}
            onSubmitEditing={() => {
              this.phone.focus()
            }}
            onChangeText={email=> this.setState({email})}
            returnKeyType="next"
          />
          <Text style={[styles.label]}>Phone number</Text>
          <TextInput
            style={[styles.textInput]}
            value={this.state.phone}
            ref={ref => (this.phone = ref)}
            onChangeText={phone=> this.setState({phone})}
            onSubmitEditing={this.handleSubmit}
            returnKeyType="next"
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 35,
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

export default CreateAccountScreen;
