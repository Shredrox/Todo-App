import React from 'react'

export const AddTodoInput = ({addTodo, setTodoContent, todoContent}) => {
    
    return (
      <div className="add-todo-container">
          <input onChange={(e) => setTodoContent(e.target.value)} value={todoContent} type="text" />
          <button onClick={addTodo} className='add-button'>Add Todo</button>
      </div>
    )
}
