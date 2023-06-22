import React, { useEffect, useRef, useState } from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'

export const TodoItem = ({todo, toggleTodo, deleteTodo, editTodo}) => { 
  const [editOn, setEditOn] = useState(false);
  const [content, setContent] = useState(todo.content);
  const [finished, setFinished] = useState(todo.finished);

  const textareaRef = useRef(null);

  useEffect(()=>{
    adjustTextareaHeight();
  }, [])

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const toggleFinished = () =>{
    const finishedState = !finished;
    setFinished(!finished);

    if(finishedState){
      textareaRef.current.style.color = 'black';
    }
    else{
      textareaRef.current.style.color = 'white';
    }
  }

  const toggleClass = (value) =>{
    if(value){
      textareaRef.current.style.backgroundColor = '#d9a900';
      textareaRef.current.style.color = 'black';
    }
    else{
      editTodo(todo.id, content);
      textareaRef.current.style.backgroundColor = 'transparent';
      if(finished){
        textareaRef.current.style.color = 'black';
      }
      else{
        textareaRef.current.style.color = 'white';
      }
    }
  }

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      editTodo(todo.id, content);
      setEditOn(false);
      textareaRef.current.style.backgroundColor = 'transparent';
      textareaRef.current.style.color = 'white';
    }
  }

  return (
    <div className={todo.finished ? 'todo-item-completed' : 'todo-item'}>
        <textarea 
          className={todo.finished ? 'todo-text-completed' : 'todo-text'}
          readOnly={!editOn}
          disabled={!editOn}
          ref={textareaRef}
          onChange={(e) => {setContent(e.target.value); adjustTextareaHeight();}} 
          onKeyDown={handleKeyDown}
          value={content}>
        </textarea>
        <div className='button-container'>
          <button onClick={() => {toggleTodo(todo.id); toggleFinished();}} >{todo.finished ? '✓' : ''} </button>
          <RiDeleteBin5Fill onClick={() => deleteTodo(todo.id)} className='bin-button'> </RiDeleteBin5Fill>
          <BiEdit onClick={() => {setEditOn(!editOn); toggleClass(!editOn);}} className='edit-button'/>
        </div>
    </div>
  )
}
