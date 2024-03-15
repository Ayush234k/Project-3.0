import React from 'react';
import './Feedback.css'
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { yellow } from '@mui/material/colors';

function Feedback(){

    return(
        <div className='feed-main'>
            <div className='navn'></div>
            <div className='feed-input'>
                <div className='feed-header'>
                    <h1>Feedback</h1>
                </div>
            <div className="feed-cred">
                <label className='feed-name'>Select Meal</label>
                <br/>
                <select>
                    <option>Mealk 1</option>
                    <option>Meal 2</option>
                    <option>Meal 3</option>
                </select>
                <br/>
                <label className='feed-name'>Select Food Item</label>
                <br/>
                <select>
                    <option>F1</option>
                    <option>F2</option>
                    <option>F3</option>
                </select>
                <div className='rateing'>
                    <label className='feed-name'>Give Rating</label>
                    <div className='stars'>
                    <Stack spacing={2}>
                        <Rating name="size-large" defaultValue={2} size="large"/>
                    </Stack>
                    </div>
                </div>
                <div className='review'>
                    <label className='feed-name'>Review</label>
                    <input type='text' className='feed-text' placeholder='Enter Review'/>
                </div>
                <div className='feed-btn'>Submit</div>
            </div>
            </div>
        </div>
    );
}

export default Feedback;