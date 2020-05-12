import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class CreateAccountScreen extends React.Component {

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
  }
});
