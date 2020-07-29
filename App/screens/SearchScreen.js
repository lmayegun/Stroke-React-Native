import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Animated, Image, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';

import {ContentThumbnail} from '../components';
import {ActivityLoader} from '../components/content';

const SearchScreen = props =>{
    const {navigation} = props;

    const contentsData = useSelector( ({news}) => news.newsState );

    const [searchText, setSearchText] = useState('');
    const [contents, setContents] = useState(null)

    useEffect(()=>{
        setContents(contentsData)
    },[contentsData]);

    if( !contents ){
        return (
            <ActivityLoader />
        );
    }

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
                    onEndEditing={()=>{alert("submitting")}}
                    clearButtonMode="while-editing"
                />
            </View>
        </View>
        <ScrollView style={{width:100+'%', paddingLeft:6}}>
            <FlatList
                data={contents}
                keyExtractor={(item)=> item.id}
                renderItem={({item, index})=>{
                    return(
                        <ContentThumbnail content={item} />
                    )
                }}
            />
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    textInput:{
        paddingLeft: 10,
        paddingRight: 10,
        width: 100 + '%',
    },
    searchbox: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 48,
        borderRadius: 4,
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        position: 'absolute',
        right: 0,
        padding: 10,
        color: '#000',
        fontSize: 14,
    },
})

export default withNavigation(SearchScreen);