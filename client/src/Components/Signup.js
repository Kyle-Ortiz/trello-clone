import React from 'react'
import {useState} from 'react'
import LogoTitle from './LogoTitle';


function Signup() {
     const [email,setEmail] = useState("");
     const [validator,setValidator] = useState(false);

     function formController(e,email) {
          setEmail(e.target.value);
          if (email.includes("@")) {
               setValidator(()=> !validator);
          }
     }

     return (
          <div className="container">
               <div className="mid-column">
                    <LogoTitle />
                    <div className="signup-login-form">
                         <div id="email-input">
                         <h1 className="signup-login-header">Sign up for your account</h1>
                         <form action="submit">
                              <input type="text" className="form"onChange={(e)=> formController(e,email)}placeholder="Enter email" value={email}/>
                              <input type="submit" id="continue-button" value="Continue" disabled={validator}/>
                         </form>
                         </div>
                    </div>
               </div> 
          </div>
     )
}

export default Signup
