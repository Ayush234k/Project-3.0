import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from './Images/Chef.png';

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
              <Navbar />
              <div className='login-credentials'>
              <div className='login-input'>
                <h1>Login</h1>
                    <input 
                     type='text' 
                     placeholder='Email'
                     onChange={(e => setEmail(e.target.value))}
                    />
                    <input 
                     type='text' 
                     placeholder='Password'
                     onChange={(e => setPassword(e.target.value))}
                     />
                     <button type="submit" onSubmit={ handleSubmit }>
                         Submit
                     </button>
                </div>
                <div className='login-image'>
                    <img src={ img1 } alt='#'></img>
                </div>
              </div>
            <Footer/>
        </div>
    );
}
export default Login;