import React from 'react';
import {View, Button} from 'react-native';

function SearchStackNavigator({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Edit')}
      />
    </View>
  );
}

export default SearchStackNavigator;
