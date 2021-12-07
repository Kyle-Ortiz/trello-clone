import React from 'react'
import {useState} from "react";
import LogoTitle from './LogoTitle';
import {useNavigate} from "react-router-dom"


function Login({user,setUser}) {
     const navigate = useNavigate();
     const formValues = {
          email : "",
          password : "",  
     }
     const [values, setValues] = useState(formValues);
     const [errors,setErrors] = useState(null);

     function handleInputChange(event) {
          const name = event.target.name;
          const value = event.target.value;

          setValues({
               ...values,
               [name]: value,
          }
          )
     }

     function formSubmission(e) {
          e.preventDefault();
          fetch("/sessions", {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                  },
               body: JSON.stringify(values)
          })
          .then((r) => {
               if (r.ok) {
                    r.json().then((user)=> setUser(user));
                    navigate('/dashboard');

               } else {
                    r.json().then((error)=> {
                         setErrors(error.error)
                    });

               }
          });
          setValues(formValues);
     }

     return (
          <div className="container">
               <div className="left-column"></div>
               <div className="mid-column">
                    <LogoTitle />
                    <div className="signup-login-form">
                         <div id="email-pass-input">
                         <h1 className="signup-login-header">Log in to Easy Boards</h1>
                         {errors? <div className="error-div">{errors}</div> : null}
                         <form action="submit" onSubmit={(e)=> formSubmission(e)}>
                              <input type="text" name="email" onFocus={()=> setErrors(null)} onChange={(event)=> handleInputChange(event)}className="form"placeholder="Enter email" value={values.email}/>
                              <input type="password" name="password" onFocus={()=> setErrors(null)} onChange={(event)=> handleInputChange(event)}className="form"placeholder="Enter password" value={values.password}/>
                              <input type="submit" className="active-login-signup-button" value="Login"/>
                         </form>
                    </div>
                    <hr className="line-separator"/>
                    <div className="help-links-container">
                         <a id="help-signup-link"href="/signup">Sign up for an Account</a>
                         <a id="help-password-link"href="/forgot">Forgot Password?</a>
                    </div>
               </div>
               </div>
               
               <div className="right-column"></div>
          </div>
          
     )
}

export default Login
