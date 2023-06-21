import React from 'react'

export const TodoItem = ({todo, toggleTodo}) => { 

  return (
    <div className={todo.finished ? 'todo-item-completed' : 'todo-item'}>
        <label>{todo.content}</label>
        <button onClick={() => toggleTodo(todo.id)} >{todo.finished ? 'X' : '✓'} </button>
    </div>
  )
}
