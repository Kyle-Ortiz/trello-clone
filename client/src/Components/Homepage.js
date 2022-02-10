import React from 'react'
import Header from './Header';
import {useState} from 'react'
// import {useNavigate} from'react-router-dom';
import Signup from './Signup';
import TextField from '@mui/material/TextField';
function Homepage() {
     const [homeEmail,setHomeEmail] = useState("");
     const [isSigned, setIsSigned] = useState(false);
     function handleSubmit(e) {
          e.preventDefault();
          setIsSigned(true)
     }

     return (
          <div>
               { isSigned ? <Signup homeEmail={homeEmail}/> :
               <div>
                    <Header />
                    <div id="home-container">
                    <div className="homepage-text">
                         <h2>Easy Boards is the tool for you.</h2>
                         <p>Create simple, easy to use project boards to manage anything from a daily todo lists to large corporate deadlines. Easy Boards will bring order into your life.</p>
                         <form action="submit" id="home-email">
                         {/* <input type="text" className="form"placeholder="Email" value={homeEmail} onChange={(e)=> setHomeEmail(e.target.value)}/> */}
                         <TextField size="small" id="outlined-basic" className="form"label="Email" value={homeEmail} onChange={(e)=> setHomeEmail(e.target.value)}variant="outlined" />
                         <button id="home-signup-button"className="blue-button buttons" onClick={(e)=> handleSubmit(e)}> Sign Up! </button>
                         </form>
                    </div>
                    <div id="home-image">
                         <img id="home-art" src="https://i.ibb.co/CMgq0MT/Pngtree-teamwork-elements-of-english-cartoon-3848118.png" alt="home image" />
                    </div>
                    
                    </div>
                    
                    
                    
               </div>}
          </div>
          
     )
}

export default Homepage
