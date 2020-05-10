import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class CreateAccountScreen extends React.Component {
  state = {
    mute: false,
    shouldPlay: true,
  }

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
      	<Text style={{ textAlign: 'center' }}> Create Account </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});
