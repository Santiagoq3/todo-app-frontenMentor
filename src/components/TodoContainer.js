import React, { useEffect, useState } from 'react'
import "./todocontainer.css"
export const TodoContainer = () => {

  const [todoInput, setInputTodos] = useState({
    todo: "",
    isDone: false,
  })
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos")

    if(savedTodos){
      return JSON.parse(savedTodos)
    }else{
      return []
    }
  })
  const [displayTodos, setDisplayTodos] = useState([])
  const {todo} = todoInput

  const handleInputChange  =(e)=>{
    setInputTodos({
      ...todoInput,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
    setDisplayTodos(todos)
  },[todos])

  const handleSendForm = (e)=>{
    e.preventDefault();
    agregarTodo()
    setInputTodos({
      todo: "",
      isDone: false,
    })
  }
  const agregarTodo = ()=>{

    const todo = {
      ...todoInput,
      id: todos.length + 1
    }
    setTodos([...todos, todo])
    
  }

  const deleteTodo = (id)=>{
    setTodos(todos.filter(t => t.id !== id))
  }

  const setCompleteTodo = (id)=>{
    let todosAux = [...todos]
    todosAux.forEach(t =>{
      if(t.id == id){
        t.isDone = true
      }
    })
    setTodos(todosAux)
  }

  const getTodosCompleted = ()=>{
    let todosAux = todos.filter(t => t.isDone == true)
    setDisplayTodos(todosAux)
    console.log(todosAux)
  }

  const getTodosActive = ()=>{
    let todosAux = todos.filter(t => t.isDone == false)
    setDisplayTodos(todosAux)
    // console.log(todosAux)
  }

  const getAllTodos = ()=>{
    setDisplayTodos(todos)
  }
  return (
    <main className='todocontainer'>
        <div className='todocontainer_container-theme'>
            <h1>T O D O</h1>
            <img src='./images/icon-moon.svg' />
        </div>
        <form onSubmitCapture={handleSendForm}>
            <div className='todocontainer_container-input'>
                <input name='todo' value={todo} type="text" placeholder='Create a new todo' autoFocus onChange={handleInputChange} />
            </div>
        </form>
        <div className='todocontainer_container-todo'>
          <ul>
            {
              displayTodos.map(t => {
                return <li key={t.id}>
                  <div className='todocontainer_container-todo-title'>
                    {/* <div className='container_icon-check-img'>
                      <img src='./images/icon-check.svg' />
                    </div> */}
                    <p onClick={()=> setCompleteTodo(t.id)}>{t.todo}</p>
                  </div>
                  <span onClick={()=> deleteTodo(t.id)}>
                    <img src='./images/icon-cross.svg' />
                  </span>
              </li>
              })
            }
          </ul>
          <div className='todocontainer_container-actions'>
            <button onClick={getAllTodos}>
              All
            </button>
            <button onClick={getTodosActive}>
              Active
            </button>
            <button onClick={getTodosCompleted}>
              Completed
            </button>
          </div>
        </div>
        
    </main>
  )
}
