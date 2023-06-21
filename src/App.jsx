import { useState, useEffect } from 'react'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [todoContent, setTodoContent] = useState('');
  
  useEffect(() =>{
    if(localStorage.getItem("todos") !== null){
      const todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, [])

  const addTodo = () =>{
    const todo = {
        id: todos.length+1,
        content: todoContent,
        finished: false
    };

    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTodoContent('');

    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const toggleTodo = (id) =>{
      const updatedTodos = todos.map((todo) =>{
          if(todo.id === id){
              return {...todo, finished: !todo.finished};
          }
          return todo;
      })

      console.log(updatedTodos);
      setTodos(updatedTodos);
  }

  return (
    <div className='wrapper'>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <div className="add-todo-container">
        <input onChange={(e) => setTodoContent(e.target.value)} value={todoContent} type="text" />
        <button onClick={addTodo} className='add-button'>Add Todo</button>
      </div>
    </div>
  )
}

export default App
