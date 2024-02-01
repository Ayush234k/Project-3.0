import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-image" >
          <div className='contact-image-1'/>
        <div className='contact-token-text'>
        <p>
        Need assistance or have a query? Reach out to us anytime. Simply fill in the form or email us at contact@ourwebsite.com, and we'll get back to you promptly!
        </p>
        </div>
        <div className='contact-icons'>
          <div className='icon'><TwitterIcon sx={{fontSize:35}} className='Tw2'/></div>
          <div className='icon'><InstagramIcon sx={{fontSize:35}} className='Ig2'/></div>
          <div className='icon'><LinkedInIcon sx={{fontSize:35}} className='Li2'/></div>
          <div className='icon'><FacebookIcon sx={{fontSize:35}} className='Fb2'/></div>
        </div>
      </div>
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
          <button type="submit" className="contact-submit">
            Send
          </button>
          </form>
      </div>
    </div>
  );
};

export default Contact;