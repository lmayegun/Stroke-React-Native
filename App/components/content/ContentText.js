import React from 'react';
import { View, Text } from 'react-native'; 

const ContentText = props => {
    const {text} = props;
    return(
        <View>
            <Text>
                {text}
            </Text>
        </View>
    );
};

export default ContentText; 