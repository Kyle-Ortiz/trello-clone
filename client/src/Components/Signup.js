import React from 'react'
import {useState} from 'react'
import LogoTitle from './LogoTitle';


function Signup() {
     const [email,setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [username,setUsername] = useState("");

     function changeHandler(e, name) {
          if (name === email) {
               setEmail(e.target.value);
          } else if (name === username) {
               setUsername(e.target.value);
          } else if (name === password) {
               setPassword(e.target.value);
          }   
     }

     function formSubmit(e) {
          e.preventDefault();
     }
     return (
          <div className="container">
               <div className="mid-column">
                    <LogoTitle />
                    <div className="signup-login-form">
                         <div id="email-input">
                         <h1 className="signup-login-header">Sign up for your account</h1>
                         <form action="submit" onSubmit={()=> formSubmit(e)}>
                              <input type="text" className="form"onChange={(e)=> changeHandler(e,email)}placeholder="Enter email" value={email}/>
                              <input type="text"  className="form" onChange={(e) => changeHandler(e,username)}placeholder="Enter username" value={username}/>
                              <input type="text" className="form" onChange={(e)=> changeHandler(e,password)}placeholder="Enter password" value={password}/>
                              <input type="submit" id="continue-button" value="Continue" />
                         </form>
                         </div>
                    </div>
               </div> 
          </div>
     )
}

export default Signup
