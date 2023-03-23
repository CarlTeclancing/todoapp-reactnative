// src/App.js

import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Addto from './components/Addto';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <SafeAreaView>
      <View>
        <NewTodo onAddTodo={handleAddTodo} />
        <TodoList todos={todos} />
        <Addto  />
      </View>
    </SafeAreaView>
  );
};

export default App;
