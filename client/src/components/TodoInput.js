import React, { useState } from 'react'
import axios from 'axios'

const TodoInput = ({userId, onInput}) => {

  const [todoText, setTodoText] = useState('')
  console.log(userId)

  async function SubmitHandler(e){
    e.preventDefault()
    axios.post(`http://localhost:4000/todo/create/${userId}`, {
      todoText: todoText
    })
    .then(res=>console.log(res.data))
    .catch(error=>console.log(error))
    onInput(todoText)
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type='text' placeholder="What's Your Todo" onChange={(e)=>setTodoText(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default TodoInput
