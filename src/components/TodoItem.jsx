import React from 'react'

export const TodoItem = ({todo, toggleTodo}) => { 

  return (
    <div className='todo-item'>
        {todo.content} 
        {todo.finished.toString()}
        <button onClick={() => toggleTodo(todo.id)} >✓</button>
    </div>
  )
}
