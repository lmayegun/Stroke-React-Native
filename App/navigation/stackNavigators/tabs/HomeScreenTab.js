import * as React from 'react';
import { View, StyleSheet, Dimensions, Button, Text, TextInput, CheckBox, Picker } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {withNavigation} from 'react-navigation';
import TopStories from '../../../screens/tabs/TopStories';

import {Field, Form, Formik, FormikProps} from 'formik';

const initialLayout = { width: Dimensions.get('window').width};
const renderTabBar = props =>(
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'purple' }}
    tabStyle={{
      margin: 0,
      padding: 0,
      width: 150
    }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color, margin: 0, padding: 0 }}>
        {route.title}
      </Text>
    )}
    bounce={true}
    scrollEnabled={true}
    inactiveColor={'#000000'}
    activeColor={'purple'}
    getLabelText={({ route }) => <Text style={{ padding:0, margin:0, fontSize: 12, fontWeight:'bold'}}> {route.title} </Text>}
    style={{height:'auto', padding:0, backgroundColor:'white'}}
  />
)

const HomeScreenTab = ()=> {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'topStories', title: 'Top Stories' },
    { key: 'msgHub', title: 'My Hub' },
    { key: 'infoSup', title: 'Info & Support' },
    { key: 'help', title: 'Help Using The App' },
  ]);

  const renderScene = SceneMap({
    topStories: TopStories,
    msgHub: MsgHub,
    infoSup: InfoSupport,
    help: Help,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar= { renderTabBar  }
      initialLayout={initialLayout}
    />
  );
}

const MyInput = ({field, form, ...props}) => {
    return <input {...field} {...props} />;
};

const MsgHub = () => {
  const [isSelected, setSelection] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState("java");
  return (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <Formik
    initialValues={{ email: '', password: '', terms:false}}
    onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View>
          <TextInput
            returnKeyType = { "next" }
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <TextInput
            onChangeText={handleChange('password')}
            value={values.password}
          />
          <CheckBox
             type='checkbox'
             checked={values.terms}
             onPress={() => handleChange('terms')}
             style={styles.checkbox}
           />
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </View>
  )
};

const InfoSupport = () => (
  <View style={[styles.scene, { backgroundColor: 'red' }]}>
    <Text> Information and Support </Text>
  </View>
);

const Help = () => (
  <View style={[styles.scene, { backgroundColor: 'pink' }]}>
    <Text> Help </Text>
  </View>
);


export default HomeScreenTab

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    width: '100%'
  },
});
