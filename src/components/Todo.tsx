import React from 'react';
import Todo from '../models/todo';
import classes from './Todo.module.css';

const TodoItem: React.FC<{item: Todo, onRemoveTodo: () => void}> = (props) => {

  const removeItemHandler = (): void => {
    props.onRemoveTodo()
  }

  return (
    <div 
      onDoubleClick={removeItemHandler}
      className={classes.item}
    >
      <li >{props.item.text}</li>
    </div>
    
  )
}

export default TodoItem;