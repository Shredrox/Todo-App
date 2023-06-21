import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, toggleTodo}) => {
    
    return (
      <div className='todo-list'>
        {todos.length === 0 
        ? 
        "No todos added." 
        :
        todos.map((todo) =>
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        )
        }
      </div>
    )
}
