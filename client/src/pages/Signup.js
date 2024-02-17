import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/user/create', {
        name: name,
        email: email,
        password: pass,
      });
      console.log(response.data); // Use response.data instead of response.json
      // Optionally, you can redirect the user to another page after successful signup
      navigate('/todo');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <span>Name</span>
          <input id='login' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        </label>

        <label htmlFor='email'>
          <span>Email</span>
          <input id='email' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label htmlFor='pass'>
          <span>Password</span>
          <input type='password' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
        </label>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
