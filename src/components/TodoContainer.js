import React from 'react'
import "./todocontainer.css"
export const TodoContainer = () => {
  return (
    <main className='todocontainer'>
        <div>
            <h1>T O D O</h1>
        </div>
        <form>
            <div className='todocontainer_container-input'>
                <input type="text" placeholder='Create a new todo' />
            </div>
        </form>
    </main>
  )
}
