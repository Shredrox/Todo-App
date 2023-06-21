import React from 'react'

export const AddTodoInput = ({addTodo, setTodoContent, todoContent}) => {
    
    return (
      <div className="add-todo-container">
          <input onChange={(e) => setTodoContent(e.target.value)} value={todoContent} type="text" placeholder='...'/>
          <button onClick={addTodo} className='add-button' disabled={todoContent === '' ? true : false}>Add Todo</button>
      </div>
    )
}
