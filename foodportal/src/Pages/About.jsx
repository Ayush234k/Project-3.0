import React from 'react';
import Navbar from '../Components/Navbar';
import './About.css'

function AboutUs(){

    return(
        <>
        <Navbar />
        <div className="about-container">
        <div className='navn'></div>
        <div className='about-main'>
        <div className='about-main-top'>
                <div className='our-mission'>
                    <h1>Our Mission</h1>
                    <br/>
                    <p>Our food portal innovatively connects hostels, fostering a sustainable community committed to minimizing food waste through efficient sharing and redistribution, ensuring every meal serves its purpose in nurturing rather than being needlessly discarded.</p>
                </div>
                    <div className='about-img'>
                        <div className='left-img'>
                            <div className='left-img-1'></div>
                            <div className='left-img-2'></div>
                        </div>
                        <div className='center-img'>
                            <div className='center-img-1'></div>
                        </div>
                        <div className='right-img'>
                            <div className='right-img-1'></div>
                            <div className='right-img-2'></div>
                        </div>
                    </div>
        </div>
        <div className='about-main-bottom'>
                <div className='left-desc'>
                    <h1>What is FoodPortal ?</h1>
                </div>
                <div className='right-desc'>
                    <p>
                        Food waste remains a critical issue globally, with significant environmental, economic, and social implications. In the context of hostels, where a diverse group of residents coexists, the challenge of managing food waste is even more pressing. To address this, the introduction of a food portal specifically designed for reducing food wastage in hostels presents a sustainable and innovative solution.
                    <br/>
                    <br/>
                        The food portal operates on a simple yet effective principle: it connects residents who have excess food with those who need it. Hostel residents can use the portal to post information about surplus food items they wish to share or search for available food within the hostel.
                    <br/>
                    <br/>
                        From an environmental standpoint, this food portal significantly contributes to the reduction of the hostel's carbon footprint. By diverting edible food from landfills, it helps in lowering methane emissions—a potent greenhouse gas released during the decomposition of organic waste.
                    </p>
                </div>
        </div> 
    </div>
    </div>  
    </> 
    );
}

export default AboutUs;