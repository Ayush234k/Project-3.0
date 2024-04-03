import React, { useEffect, useState } from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ExploreIcon from '@mui/icons-material/Explore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Link } from "react-router-dom";
import AOS from 'aos';
import './Banner.css'

function Banner(){

    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 1000,
         });
    }, [])

    return(
        <>
        <div className="login-link">
            <div className='login-btn'>
            <Link id='login-btn'
                to="/login">Login
            </Link>
            </div>
            <div className='login-btn' id='signup-btn'>
            <Link id='login-btn'
                to="/signup">SignUp
            </Link>
            </div>
        </div>
        <div className='Contain-0'>
            <div className="logo">
                <h1>EcoDine 2.0</h1>
                <p>By KIIT University</p>
            </div>
            <div className='portal-info'>
                <div className='headline'>
                    Our food portal innovatively connects hostels, fostering a sustainable community committed to minimizing food waste through efficient sharing and redistribution, ensuring every meal serves its purpose in nurturing rather than being needlessly discarded.
                </div>
                <div className='subscribe'>
                    <div className='wrapper-3'>
                        <EmailRoundedIcon sx={{fontSize:40}} className='ER-1'/>
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="subscribe-contact-input"
                    />
                    <div className='subscribe-btn'>
                        Subscribe
                    </div>
                </div>
                <div className='explore'>
                    <ExploreIcon sx={{ fontSize: 40 }}/>
                    Explore KIIT
                </div>
                <div className='social-icons'>
                    <div className='sicon'><XIcon sx={{fontSize:42}} className='Tw2'/></div>
                    <div className='sicon'><InstagramIcon sx={{fontSize:42}} className='Ig2'/></div>
                    <div className='sicon'><FacebookIcon sx={{fontSize:42}} className='Fb2'/></div>
                </div>
            </div>
            <h1>Our Mission</h1>
            <div className='image-container' id='IC-1'>
                <div className='desc-img-1' id='img-card' data-aos="flip-right"></div>
                <div className='description' data-aos="fade-up-left">
                This innovative food portal project serves as a powerful tool for fostering awareness and prompting behavioral change among students regarding food wastage in hostel messes. By providing a platform where students can actively choose to opt out of meals for certain days, it not only empowers them to contribute to the reduction of food waste but also educates them on the significance of their decisions in the broader context of sustainability. The tangible impact of their choices, reflected in the reduced amount of food prepared and the subsequent decrease in waste, makes the consequences of food wastage more apparent.
                </div>
            </div>
            <div className='image-container'  id='IC-2'>
                <div className='desc-img-2' id='img-card' data-aos="flip-left"></div>
                <div className='description' data-aos="fade-up-right">
                This precision in planning significantly reduces the surplus food that would otherwise be wasted, aligning with broader societal goals of sustainability and responsible resource utilization. Moreover, the initiative not only contributes to the reduction of environmental impact associated with food waste, such as greenhouse gas emissions and unnecessary water usage, but also fosters a culture of mindfulness and responsibility towards food consumption among students.
                </div>
            </div>
            <div className='image-container'  id='IC-3'>
                <div className='desc-img-3' id='img-card' data-aos="flip-right"></div>
                <div className='description' data-aos="fade-up-left">
                The adoption of modern technologies such as React for the frontend, MongoDB for backend data management, and seamless API interactions via Postman and Axios ensures a user-friendly and efficient platform that can easily adapt to the dynamic needs of a hostel's dining services. Such a proactive approach not only enhances the operational efficiency of hostel messes by aligning food preparation with actual demand but also offers a scalable model for sustainability that can be adopted by other universities.
                </div>
            </div>
            <div className='image-container'  id='IC-4'>
                <div className='desc-img-4' id='img-card' data-aos="flip-left"></div>
                <div className='description' data-aos="fade-up-right">
                Through this project, the university sets a precedent for environmental responsibility, showing that through thoughtful innovation and community involvement, significant strides can be made in creating a healthier, more sustainable environment. This initiative not only contributes to the reduction of food wastage but also enhances the overall dining experience by ensuring that meals are prepared and consumed more thoughtfully, leading to a positive shift in campus culture towards sustainability and mindfulness.
                </div>
            </div>
            <div className='image-container'  id='IC-5'>
                <div className='desc-img-5' id='img-card' data-aos="flip-right"></div>
                <div className='description' data-aos="fade-up-left">
                In turn, this decreased waste not only lessens the amount of organic matter ending up in landfills, where it would decompose and emit methane—a potent greenhouse gas—but also curtails the proliferation of malodorous compounds and harmful bacteria associated with rotting food. Consequently, this initiative aids in diminishing the ecological footprint of hostel mess operations and plays a crucial role in mitigating the adverse effects of pollution and bacterial spread in the surrounding communities. 
                </div>
            </div>
        </div>   
    </div>
    </>
    );
}

export default Banner;