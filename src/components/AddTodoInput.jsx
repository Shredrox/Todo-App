import React from 'react'

export const AddTodoInput = ({addTodo, setTodoContent, todoContent}) => {
  
  const handleKeyDown = (e) =>{
    if(e.key === 'Enter' && todoContent !== ''){
      addTodo();
    }
  }  

  return (
    <div className="add-todo-container">
        <input onKeyDown={handleKeyDown} onChange={(e) => setTodoContent(e.target.value)} value={todoContent} type="text" placeholder='...'/>
        <button onClick={addTodo} className='add-button' disabled={todoContent === '' ? true : false}>Add Todo</button>
    </div>
  )
}
