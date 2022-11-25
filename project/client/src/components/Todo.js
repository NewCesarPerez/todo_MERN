import React from "react";

const Todo = ({text, setTodos, todos, todo}) => {
    const todoHandler = ()=>{
        setTodos(todos.filter(elem=>elem.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item =>{
            
            if(item.id===todo.id){
                return {
                    ...item, completed:!item.completed
                }
            }else{
                return item
            }
        }))
    }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed":""}`} >{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={todoHandler} className="trash-btn">
        <i className="fas fa-trash"> dfgg</i>
      </button>
    </div>
  );
};

export default Todo;
