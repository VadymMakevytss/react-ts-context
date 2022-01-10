import React from 'react';
import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
