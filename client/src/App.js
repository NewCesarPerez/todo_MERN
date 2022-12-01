
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';
function App() {

  
  //statess
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([])
  const [status, setStatus]=useState("all")
  const [filterTodos, setFilterTodos] = useState([])

  

  //functions

  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilterTodos(todos.filter(todo => todo.completed===true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo => todo.completed===false))
        break;
      default:
        setFilterTodos(todos)
        break;
        
    }   
  }

  //Save in localStorage

  const saveLocalStorage = ()=>{
    if(todos.length>0){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    
  }

  const getLocalStorage = ()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      let todosLocal=JSON.parse(localStorage.getItem('todos'))
      setTodos(todosLocal)
    }
  }

  useEffect(()=>{
    getLocalStorage()
  }, [])

  // useEffect
  useEffect(()=>{
    filterHandler()
    saveLocalStorage()
  }, [todos, status])
  return (
    <div className="App">
      <header>
      <h1>Cesar's ToDo list</h1>
      </header>
      <Form  status={status} setStatus={setStatus} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
