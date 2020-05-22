import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../utils/Colors';

export default class Accordian extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

  render() {
    const items = [];
    let i = 0;
    for(item of this.state.data) {
      items.push(
        <View>
            <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]}>
                <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
                <Text style={[styles.font, styles.itemInActive]} > </Text>
                <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
            </TouchableOpacity>
            <View style={styles.childHr}/>
        </View>
      )
      i++;
    }
    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <FontAwesome name="plus" color={Colors.PRIMARY} size={16} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
              this.state.expanded &&
              <View style={{}}>
                {items}
              </View>
            }
       </View>
    )
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:15,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.PRIMARY,
    },
    itemActive:{
        fontSize: 12,
        color: Colors.GREEN,
    },
    itemInActive:{
        fontSize: 16,
        color: Colors.DARKGRAY,
    },
    btnActive:{
        borderColor: Colors.GREEN,
    },
    btnInActive:{
        borderColor: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:38,
        paddingLeft:18,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    childRow:{
        flexDirection: 'column',
        justifyContent:'space-between',
        backgroundColor: Colors.GRAY,
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.LIGHTGRAY,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.GREEN,
    },
    colorInActive:{
        borderColor: Colors.DARKGRAY,
    }

});
