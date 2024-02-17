import React, {useState, useEffect} from 'react'
import Signup from './Signup'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({onlogin}) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:4000/user/login', {
          email: email,
          password: pass,
        });
        const userId = response.data.existingUser._id
        onlogin(userId)
        navigate('/todo');
      } catch (error) {
        console.error('Error:', error);
      }
    };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
            <span>Email</span>
            <input id='email' type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label htmlFor='pass'>
            <span>password</span>
            <input id='pass' type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
        </label>
        <button type='submit'>Login</button>
        </form>
        <p>New User?</p>
        <button onClick={()=>navigate('/signup')}>Signup</button>
    </div>
  )
}

export default Login