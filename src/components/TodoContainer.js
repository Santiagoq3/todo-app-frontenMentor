import React, { useState } from 'react'
import "./todocontainer.css"
export const TodoContainer = () => {

  const [todoInput, setInputTodos] = useState({
    todo: "",
    isDone: false,
  })
  const [todos, setTodos] = useState([])
  const {todo} = todoInput

  const handleInputChange  =(e)=>{
    setInputTodos({
      ...todoInput,
      [e.target.name]: e.target.value
    })
  }

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
              todos.map(t => {
                return <li key={t.id}>
                  <div className='todocontainer_container-todo-title'>
                    <input type="radio" />
                    <p>{t.todo}</p>
                  </div>
                  <span onClick={()=> deleteTodo(t.id)}>
                    <img src='./images/icon-cross.svg' />
                  </span>
              </li>
              })
            }
          </ul>
          <div className='todocontainer_container-actions'>
            <button>
              All
            </button>
            <button>
              Active
            </button>
            <button>
              Completed
            </button>
          </div>
        </div>
        
    </main>
  )
}
