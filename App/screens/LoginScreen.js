import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class LoginScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
      	<Text style={{ textAlign: 'center' }}> Login </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
