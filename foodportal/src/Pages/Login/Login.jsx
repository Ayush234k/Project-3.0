import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import NoEncryptionRoundedIcon from '@mui/icons-material/NoEncryptionRounded';
// import Footer from '../../Components/Footer'
// import chef from '../../assets/Chef.png'
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
          <label className='email-label'>Email *</label>
          <div className='wrapper'>
              <MailRoundedIcon sx={{fontSize:30}} className='MR'/>
              <input 
               type='text' 
               placeholder='Enter your email'
               onChange={(e => setEmail(e.target.value))}
              />
          </div>
          <label>Password *</label>
          <div className='wrapper'>
          <NoEncryptionRoundedIcon sx={{fontSize:30}} className='MR'/>
              <input 
               type='password' 
               placeholder='Enter your password'
               onChange={(e => setPassword(e.target.value))}
               />
          </div>
          </div>
               <button type="submit" onSubmit={ handleSubmit }>
                   Log In
               </button>
               <p>Don't Have An Account? <Link>Sign Up</Link></p>
          </div>
          <div className='login-image'>
            <div className='image'/>
              {/* <img src={ chef } alt='#'></img> */}
          </div>
        </div>
  </div>
    );
}
export default Login;