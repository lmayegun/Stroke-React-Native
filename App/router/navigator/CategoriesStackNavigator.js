import React from 'react';
import {View, Button} from 'react-native';

function CategoriesStackNavigator({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
export default CategoriesStackNavigator;
