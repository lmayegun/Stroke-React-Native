import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-ff413.cloudfunctions.net';

class CreateAccountScreen extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      alert("that number is already been used");
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>

          <TextInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default CreateAccountScreen;
