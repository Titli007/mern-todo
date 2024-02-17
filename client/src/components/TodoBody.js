import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ListTodo from './ListTodo'

const ListTodos = ({userId,todoUpdate}) => {

  const [alltodo,setAllTodo] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4000/todo/read/${userId}`)
    .then(res=>setAllTodo(res.data.allTodos))
    .catch(error=>console.log(error))
  },[todoUpdate])

  console.log(alltodo)
  

  return (
    <div>
        <ul>
          <span>Todo</span>
          <span>  Complete</span>
          <span>  Important</span>
            {
              alltodo.length>0&&
              alltodo.map((data,index)=>{
                return <ListTodo key={index} data={data} userId={userId}/>
              })
            }
        </ul>
    </div>
  )
}

export default ListTodos