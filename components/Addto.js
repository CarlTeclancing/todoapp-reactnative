import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { render } from 'react-native-web';
 const News = ()=>{
    return(
<View>
    <Text>HELLO TO EVERY ONE</Text>
</View>
    )

 } 
const Addto = ()=>{
    return(
        <View>
            
            <Button
            title='Add'
            onPress={()=>{
                alert("hello world")
            }}
            />
            <News />
        </View>
    )
}

export default Addto