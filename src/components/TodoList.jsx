import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, toggleTodo}) => {
    
    return (
      <div className='todo-list'>
          {todos.map((todo) =>
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
          )}
      </div>
    )
}
