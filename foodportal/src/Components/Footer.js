import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer(){
    return(
        <div  className='footer-main'>
            <InstagramIcon className='Ig'/>
            <FacebookIcon className='Fb'/>
            <LinkedInIcon className='Li'/>
            <TwitterIcon className='Tw'/>                
            <YouTubeIcon className='Yt'/>
        </div>
    );
}
export default Footer;
