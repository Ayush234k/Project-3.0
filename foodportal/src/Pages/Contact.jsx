import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import Navbar from '../Components/Navbar';
import './Contact.css';

const Contact = () => {


  function GrowTransition(props) {
    return <Grow {...props} />;
  }
  
    const [state, setState] = React.useState({
      open: false,
      Transition: Grow,
    });
  
    const handleClick = (Transition) => () => {
      setState({
        open: true,
        Transition,
      });
    };
  
    const handleClose = () => {
      setState({
        ...state,
        open: false,
      });
    };


  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className='navn'></div>
      <div className="contact-content">
          <div className='contact-heading'>
          <h1 className="contact-title">GET IN TOUCH</h1>
          <p className="contact-subtitle">
            24/7 We will answer your questions and problems
          </p>
        </div>
        <form className="contact-form">
          <div className='wrapper-2'>
          <PersonIcon sx={{fontSize:30}} className='ER'/>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="contact-input"
          />
          </div>
          <div className='wrapper-2'>
          <EmailRoundedIcon sx={{fontSize:30}} className='ER'/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-input"
          />
          </div>
          <div className='wrapper-2'>
          <LocalPhoneRoundedIcon sx={{fontSize:30}} className='ER'/>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="contact-input"
          />
          </div>
          <textarea
            name="message"
            placeholder="Describe your issue"
            className="contact-textarea"
          ></textarea>
          <div 
            onClick={handleClick(GrowTransition)}
            className="contact-submit">
            Send
          </div>
          </form>
      </div>
      <div className="contact-image" >
          <div className='contact-image-1'/>
        <div className='contact-token-text'>
        <p>
        Need assistance or have a query? Reach out to us anytime. Simply fill in the form or email us at contact@ourwebsite.com, and we'll get back to you promptly!
        </p>
        </div>
        <div className='contact-icons'>
          <div className='icon'><XIcon sx={{fontSize:35}} className='Tw2'/></div>
          <div className='icon'><InstagramIcon sx={{fontSize:35}} className='Ig2'/></div>
          <div className='icon'><LinkedInIcon sx={{fontSize:35}} className='Li2'/></div>
          <div className='icon'><FacebookIcon sx={{fontSize:35}} className='Fb2'/></div>
        </div>
      </div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Email Sent"
        key={state.Transition.name}
        autoHideDuration={1800}
      />
    </div>
    </>
  );
};

export default Contact;