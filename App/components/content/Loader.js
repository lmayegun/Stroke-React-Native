import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loader = ()=>{
    return(
        <View style={[style.root]}>
            <ActivityIndicator size="large" />
        </View>
    );
};

const style = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "flex-start",
        padding: '50%'
    }
})

export default Loader;
