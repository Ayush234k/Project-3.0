import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// import Footer from '../../Components/Footer'
// import img1 from '../../assets/Chef.png'
// import log1 from '../../assets/log1.jpg'

function Login(){
const [email, setEmail] = useState()
const [password, setPassword] = useState()

const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:7000/login',{email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

    return(
        <div  className='login-main'>
        <div className='login-credentials'>
        <div className='login-input'>
              <h1>Welcome back !</h1>
          <div className='login-input-2'>
          <label>Email *</label>
              <input 
               type='text' 
               placeholder='Enter your email'
               onChange={(e => setEmail(e.target.value))}
              />
          <label>Password *</label>
              <input 
               type='text' 
               placeholder='Enter your password'
               onChange={(e => setPassword(e.target.value))}
               />
          </div>
               <button type="submit" onSubmit={ handleSubmit }>
                   Log In
               </button>
               <p>Don't Have An Account? <Link>Sign Up</Link></p>
          </div>
          <div className='login-image'>
              {/* <img src={ log1 } alt='#'></img> */}
          </div>
        </div>
  </div>
    );
}
export default Login;