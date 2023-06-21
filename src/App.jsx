import { useState, useEffect } from 'react'
import { TodoList } from './components/TodoList'
import { Clock } from './components/Clock';
import { AddTodoInput } from './components/AddTodoInput';

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
        id: todos.length === 0 ? 1 : todos[todos.length-1].id+1,
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

      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const deleteTodo = (id) =>{
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <div className='wrapper'>
      <Clock/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <AddTodoInput addTodo={addTodo} setTodoContent={setTodoContent} todoContent={todoContent}/>
    </div>
  )
}

export default App
