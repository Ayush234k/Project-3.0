import React from 'react';
import './Feedback.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import { yellow } from '@mui/material/colors';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Snackbar from '@mui/material/Snackbar';
import Grow from '@mui/material/Grow';
import Navbar from '../Components/Navbar';


// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';


function Feedback(){

    // const [fname, setFname ] = useState('');
    // const [email, setEmail ] = useState('');
    // const [msg, setMsg] = useState('');

    // const submitForm = (e) => {
    //     e.preventDefault();
    
    //       setFname('');
    //       setEmail('');
    //       setMsg('');
    //   };

    // const notify = () =>{
    //     toast.success('Form Submitted!', {
    //       position: "bottom-left",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       });
    //   }


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

        // const [item, setItem] = React.useState('');

        // const handleChange = (event) => {
        // setItem(event.target.value);
        // };


    return(
      <>
      <Navbar/>
        <div className='feed-main'>
            <div className='navn'></div>
            <div className='feed-input'>
                <div className='feed-header'>
                    <h1>Feedback</h1>
                </div>
            <div className='feed-body'>
            <div className="feed-cred">
                <label className='feed-name'>Select Meal</label>
                <br/>
                <select>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
                <br/>
                <label className='feed-name'>Select Food Item</label>
                <br/>
                <select>
                    <option>Chicken Butter Masala</option>
                    <option>Paneer Butter Masala</option>
                    <option>Patta Gobhi</option>
                    <option>Egg Kalia</option>
                </select>
                <br/>




                {/* <Select
                  id='feed-select'
                  value={item}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>None</em>
                      </MenuItem>
                        <MenuItem value={10}>Chicken Butter Masala</MenuItem>
                        <MenuItem value={20}>Paneer Butter Masala</MenuItem>
                        <MenuItem value={30}>Patta Gobhi</MenuItem>
                </Select> */}




                <div className='rateing'>
                    <label className='feed-name'>Rate Your Experience</label>
                    <div className='stars'>
                    <Stack spacing={2}>
                        <Rating name="size-large" defaultValue={2} size="large"/>
                    </Stack>
                    </div>
                </div>
                <div className='review'>
                    <label className='feed-name'>Care to share more?</label>
                    <textarea
                     className='feed-text' placeholder='Let us know here...'
                    />
                </div>
                <div className='feed-btn'
                onClick={handleClick(GrowTransition)}
                >Submit</div>
            </div>
            <div className='feed-img'>
                <div className="img-1"></div>
                <div className="img-text">
                    We'd love to hear your <br/>thoughts. 
                </div>
            </div>
            </div>
            </div>
            {/* <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        /> */}
        <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Form Submitted"
        key={state.Transition.name}
        autoHideDuration={1800}
      />
        </div>
      </>
    );
}

export default Feedback;