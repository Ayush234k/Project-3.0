import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import PlaceIcon from '@mui/icons-material/Place';
import './Settings.css'

function Settings() {
  return (
    <div className='setting-main'>
    <div className='navn'></div>
        <div className='setting-cred'>
            <div className='setting-header'>
                <div className='go-to-dashboard'>
                  <ArrowBackIcon sx={{fontSize:30}} />
                  Back to dashboard
                  </div>
                <h1>Settings</h1>
            </div>
            <div className='basic-info'>
                <div className='box'>Name</div>
                <div className='wrapper-3'>Ayush Singh</div>
            </div>
            <div className='basic-info'>
                <div className='box'>Roll Number</div>
                <div className='wrapper-3'>21052242</div>
              </div>
            <div className='basic-info'>
                <div className='box'>Hostel</div>
                <div className='wrapper-3'>KP-9C</div>
            </div>
            <div className='payment'>
              <div className='payment-heading'>
                <h2>Payment Method</h2>
                <p>Update your billing details and address</p>
              </div>
                <div className='payment-cred'>
                    <div className='card-details'>Card Details</div>
                    <div className='details'>
                    <div className='detail-input-1'>
                        <label>Name on card</label>
                        <input 
                         type='text'
                         className='input-1'
                        />
                        <label>Card number</label>
                        <input 
                         type='text'
                         className='input-1'
                        />
                    </div>
                    <div className='detail-input-2'>
                    <label>Expiry</label>
                        <input 
                         type='text'
                         className='input-1'
                        />
                        <label>CVV</label>
                        <input 
                         type='password'
                         className='input-1'
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className='basic-info'>
            <div className='box'>Email</div>
            <div className='wrapper-4'>
              <input 
                type='email'
                placeholder='Enter email'
                className='input-1'
              />
              <EditIcon sx={{fontSize:27}}/>
              </div>
            </div>
            <div className='basic-info'>
            <div className='box'>Street address</div>
            <div className='wrapper-4'>
              <input 
                type='email'
                placeholder='Enter address'
                className='input-1'
              />
              <EditIcon sx={{fontSize:27}}/>
              </div>
            </div>
            <div className='basic-info'>
            <div className='box'>City</div>
            <div className='wrapper-4'>
              <input 
                type='email'
                placeholder='Enter city'
                className='input-1'
              />
              <EditIcon sx={{fontSize:27}}/>
              </div>
            </div>
            <div className='basic-info'>
            <div className='box'>State / Provision</div>
            <div className='wrapper-5'>
              <input 
                type='email'
                placeholder='Enter state'
                className='input-1'
              />
              <EditIcon sx={{fontSize:27}}/>
              </div>
              <div className='wrapper-5'>
              <input 
                type='email'
                placeholder='Enter pincode'
                className='input-1'
              />
              <EditIcon sx={{fontSize:27}}/>
              </div>
            </div>
            <div className='basic-info'>
            <div className='box'>Country</div>
            <div className='wrapper-4'>
              <input 
                type='email'
                placeholder='Enter country'
                className='input-1'
              />
              <EditIcon sx={{fontSize:27}}/>
              </div>
            </div>
            <div className='basic-info'>
            <div className='box'></div>
            <div className='send'>Submit</div>
            </div>
      </div>
    </div>
  );
}

export default Settings;
