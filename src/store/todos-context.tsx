import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id:string) => void
}

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([])

  const addTodoHandler = (todo: string): void => {
    setTodos(prevState => (
      [...prevState,
        new Todo(todo)
      ]
    ))
  }

  const removeTodoHandler = (todoId: string): void => {
    setTodos(prevState => (
      prevState.filter(todo => todo.id !== todoId)
    ))
  }
  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider