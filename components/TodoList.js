// src/components/TodoList.js

import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TodoList = ({ todos }) => {
  const renderItem = ({ item }) => (
    <Text>{item.text}</Text>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default TodoList;
