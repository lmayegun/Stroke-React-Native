import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Accordian from '../../../components/Accordian'
import { Colors } from '../../../utils/Colors';

export default class InfoSupport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        {
          title: 'Stroke and Coronavirus (COVID-19)',
          data: [
            {key:"It is important that we stay connected with our loved ones, and with video calling it couldn't be easier."+
                                          "We now have aphasia-friendly guides available on how to use Zoom, WhatsApp and Skype."+
                                          "Download the instructions on how to use different versions below." +
                                          "An introduction to video calling with people with aphasia - a full overview",
             value:"It is important that we stay connected with our loved ones, and with video calling it couldn't be easier."+
                                          "We now have aphasia-friendly guides available on how to use Zoom, WhatsApp and Skype."+
                                          "Download the instructions on how to use different versions below." +
                                          "An introduction to video calling with people with aphasia - a full overview"},
            {key:'Mutton Biryani', value:false},
            {key:'Prawns Biryani', value:false},
          ]
        },
        {
          title: 'Stroke Apps',
          data: [
            {key:'Chicken Dominator', value:false},
            {key:'Peri Peri Chicken', value:false},
            {key:'Indie Tandoori Paneer', value:false},
            {key:'Veg Extraveganza', value:false}
          ]
        },
        {
         title: 'Stroke News',
         data: [
           {key:'Cocktail', value:false},
           {key:'Mocktail', value:false},
           {key:'Lemon Soda', value:false},
           {key:'Orange Soda', value:false}
          ]
        },
        {
          title: 'Webinars',
          data: [
            {key:'Choco Lava Cake', value:false},
            {key:'Gulabjamun', value:false},
            {key:'Kalajamun', value:false},
            {key:'Jalebi', value:false}
          ]
        },
        {
          title: 'Blog',
          data: [
            {key:'Choco Lava Cake', value:false},
            {key:'Gulabjamun', value:false},
            {key:'Kalajamun', value:false},
            {key:'Jalebi', value:false}
          ]
        },
        {
          title: 'Videos',
          data: [
            {key:'Choco Lava Cake', value:false},
            {key:'Gulabjamun', value:false},
            {key:'Kalajamun', value:false},
            {key:'Jalebi', value:false}
          ]
        },
        {
          title: 'Guides',
          data: [
            {key:'Choco Lava Cake', value:false},
            {key:'Gulabjamun', value:false},
            {key:'Kalajamun', value:false},
            {key:'Jalebi', value:false}
          ]
        },
      ]
     }
  }

  renderAccordians=()=> {
    const items = [];
    let i = 0;
    for (item of this.state.menu) {
        items.push(
            <Accordian
                title = {item.title}
                data = {item.data}
                key = {i}
            />
        );
        i++;
    }
    return items;
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.renderAccordians() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:10,
   backgroundColor:Colors.WHITE,
  }
});
