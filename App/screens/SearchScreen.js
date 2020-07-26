import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Animated, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import {ContentThumbnail} from '../components';

const SearchScreen = props =>{
    const {navigation} = props;
    const [searchText, setSearchText] = useState('');

    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor:'white'}}>
        <View style={{ alignItems: 'center', paddingBottom:10 }}>
            <View style={styles.searchbox}>
                <Animated.Text style={[styles.placeholder]}>
                    <Image
                        source={require('../assets/images/icons/ios-search.png')}
                        style={{ width: 14, height: 14, top: 4 }}
                    />
                </Animated.Text>
                <TextInput
                    placeholder="Search"
                    onChangeText={(text) => setSearchText({ text })}
                    value={searchText}
                    style={styles.textInput}
                    clearButtonMode="while-editing"
                />
            </View>
            <Button
                title="Submit"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
        <ScrollView style={{width:100+'%'}}>
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
            <ContentThumbnail />
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    textInput:{
        paddingLeft: 5,
        paddingRight: 5,
        width: 50 + '%',
    },
    searchbox: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 28,
        borderRadius: 4,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        position: 'absolute',
        right: 0,
        padding: 5,
        color: '#8E8E93',
        fontSize: 14,
    },
})

export default withNavigation(SearchScreen);