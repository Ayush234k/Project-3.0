import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import './Login.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import NoEncryptionRoundedIcon from '@mui/icons-material/NoEncryptionRounded';
import Signup from '../Signup/Signup';
// import Footer from '../../Components/Footer'
// import chef from '../../assets/Chef.png'
// import log1 from '../../assets/log1.jpg'

const Login = () => {
const [email, setEmail] = useState()
const [password, setPassword] = useState()

const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:7000/login',{email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

const [action,setAction] = useState('Login');

    return(
    <>
    <div  className='login-main'>
        <div className='login-credentials'>
        <div className='login-input'>
              <h1>{ action }</h1>
          <div className='login-input-2'>
            {action==='Login'?<label></label> : <label className='email-label' id='required'>Username</label>}
            {action==='Login'?<div></div>: <div className='wrapper'>
              <PersonIcon sx={{fontSize:27}} className='MR'/>
              <input 
               type='text' 
               placeholder='Enter your username'
               onChange={(e => setEmail(e.target.value))}
              />
          </div>}

          <label id='required'>Email</label>
          <div className='wrapper'>
          <EmailRoundedIcon sx={{fontSize:27}} className='MR'/>
              <input 
               type='password' 
               placeholder='Enter your email'
               onChange={(e => setPassword(e.target.value))}
               />
          </div>
          <label id='required'>Password</label>
          <div className='wrapper'>
          <NoEncryptionRoundedIcon sx={{fontSize:27}} className='MR'/>
              <input 
               type='password' 
               placeholder='Enter your password'
               onChange={(e => setPassword(e.target.value))}
               />
          </div>
          </div>
               <button className={action==='Login'? 'bt':'bt'} type="submit" onSubmit={ handleSubmit }>
                   { action }
               </button>
               <div className='Change'>
               {action==='Sign Up'?<p>Already Have An Account?</p>: <p>Don't Have An Account?</p>}
                <Link onClick={()=>{setAction('Sign Up') }}>Sign Up</Link>
                </div>
          </div>
          <div className='login-image'>
            <div className='image'/>
              {/* <img src={ chef } alt='#'></img> */}
          </div>
        </div>
    </div>
  </>
    );
}
export default Login;