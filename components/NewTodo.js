// src/components/NewTodo.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NewTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    onAddTodo({
      id: Date.now().toString(),
      text,
      completed: false,
    });
    setText('');
  };

  return (
    <View>
      <TextInput style={StyleSheet.in}
        value={text}
        onChangeText={setText}
        placeholder="Enter Todo "
        width="300px"
        border="1px solid black"
      />
      <Button
        title="Add Todo"
        onPress={handleAddTodo}
      />
    </View>
  );
  TextInput:{
    width:300;
    paddingVertical:8;
    borderWidth:2;
  }
};
const styles = StyleSheet.create({
  in:{
    width:100,
    height:100,

  }
})

export default NewTodo;
