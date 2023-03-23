// src/components/NewTodo.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

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
      <TextInput
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

export default NewTodo;
