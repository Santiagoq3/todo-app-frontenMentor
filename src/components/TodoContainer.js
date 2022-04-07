import React from 'react'
import "./todocontainer.css"
export const TodoContainer = () => {
  return (
    <main className='todocontainer'>
        <div className='todocontainer_container-theme'>
            <h1>T O D O</h1>
            <button>
              cambiar theme
            </button>
        </div>
        <form>
            <div className='todocontainer_container-input'>
                <input type="text" placeholder='Create a new todo' autoFocus />
            </div>
        </form>
        <div className='todocontainer_container-todo'>
          <ul>
            <li>
              <div className='todocontainer_container-todo-title'>
                <input type="radio" />
                <p>Learn React</p>
              </div>
              <button>
                delete
              </button>
            </li>
            
            <li>
              <div className='todocontainer_container-todo-title'>
                <input type="radio" />
                <p>Learn React</p>
              </div>
              <button>
                delete
              </button>
            </li>
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
