import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { render } from 'react-native-web';

const Addto = ()=>{
    return(
        <View>
            <Button
            title='Add'
            onPress={()=>{
                alert("hello world")
            }}
            />
        </View>
    )
}

export default Addto;