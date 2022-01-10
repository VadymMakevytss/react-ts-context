import React, {useRef, useContext} from 'react';
import classes from './NewTodo.module.css';

import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC= () => {
  const todosCtx = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current?.value;

    if(!enteredText?.trim().length){
      console.log('No text');
      return
    } else {
      todosCtx.addTodo(enteredText)
    }

    inputRef.current!.value = "";
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type="text" id='text' ref={inputRef} />
      <button type='submit'>Add text</button>
    </form>
  )
}

export default NewTodo;