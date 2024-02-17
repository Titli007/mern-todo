import React,{useEffect, useState} from 'react'
import axios from 'axios'

const ListTodo = ({data, index, userId}) => {
    const [important,setImportant] = useState(false)
    const [complete, setComplete] = useState(false)

    useEffect(()=>{
        axios.post(`http://localhost:4000/todo/update/${userId}`, {
            isImportant: important,
            isCompleted: complete
        })
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
    },[important, complete])

    console.log(complete, important)
    console.log("jhhhjbjbhj")


  return (
    <div key={index}>
                  <span>{data.todoText}</span>
                  <span>
                    {data.isCompleted?
                    <button onClick={()=>setComplete(!complete)}>
                    <span>  &#10003;</span>
                    </button>
                    :
                    <>
                    <button onClick={()=>setComplete(!complete)}>  x</button>
                    </>
                    }
                    </span>
                  
                    <span>
                    {data.isImportant?
                    <button>
                    <span onClick={()=>setImportant(!important)}>  &#10003;</span>
                    </button>
                    :
                    <button>
                    <span onClick={()=>setImportant(!important)}>  x</span>
                    </button>
                    }
                    </span>
                </div>
  )
}

export default ListTodo