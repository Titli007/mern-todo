import React,{useState} from 'react'
import TodoInput from '../components/TodoInput'
import TodoBody from '../components/TodoBody'

const Todo = ({userId}) => {
  console.log(userId)
  const[todoUpdate,setTodoUpdate] = useState('')

  const handleTodoText = (data) => {
    setTodoUpdate(data);
  };

  console.log(todoUpdate)

  return (
    <div>
        <h1>Your Todo List</h1>
        <TodoInput userId={userId} onInput={handleTodoText}/>
        <TodoBody userId={userId} todoUpdate={todoUpdate}/>
    </div>
  )
}

export default Todo