import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'

export const TodoItem = ({todo, toggleTodo, deleteTodo}) => { 

  return (
    <div className={todo.finished ? 'todo-item-completed' : 'todo-item'}>
        <label>{todo.content}</label>
        <div className='button-container'>
          <button onClick={() => toggleTodo(todo.id)} >{todo.finished ? '✓' : ''} </button>
          <RiDeleteBin5Fill onClick={() => deleteTodo(todo.id)} className='bin-button'> </RiDeleteBin5Fill>
          <BiEdit className='edit-button'/>
        </div>
    </div>
  )
}
