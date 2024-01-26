import React from 'react';
// import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-image" >
        <div className='contact-token-text'>
        <p>
        Need assistance or have a query? Reach out to us anytime. Simply fill in the form or email us at contact@ourwebsite.com, and we'll get back to you promptly!
        </p>
        </div>
        <div className='contact-icons'>
          <div className='icon'><TwitterIcon className='Tw2'/></div>
          <div className='icon'><InstagramIcon className='Ig2'/></div>
          <div className='icon'><LinkedInIcon className='Li2'/></div>
          <div className='icon'><FacebookIcon className='Fb2'/></div>
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
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="contact-input"
          />
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