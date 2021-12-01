import React from 'react'
import {useState} from "react";


function Login({user,setUser}) {
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
               } else {
                    r.json().then((error)=> {
                         setErrors(error.error)
                    });

               }
          });
          setValues(formValues);
     }

     return (
          <div className="signup-login-form">
               <div id="email-pass-input">
                    <h1 className="signup-login-header">Log in to Easy Boards</h1>
                    {errors? <div className="error-div">{errors}</div> : null}
                    <form action="submit" onSubmit={(e)=> formSubmission(e)}>
                         <input type="text" name="email" onChange={(event)=> handleInputChange(event)}className="form"placeholder="Enter email" value={values.email}/>
                         <input type="password" name="password" onChange={(event)=> handleInputChange(event)}className="form"placeholder="Enter password" value={values.password}/>
                         <input type="submit" className="active-login-signup-button" value="Login"/>
                    </form>
               </div>
               <hr className="line-separator"/>
               <div className="help-links-container">
                    <a className="help-link"href="/signup">Signup for an Account</a>
                    <a className="help-link"href="#">Forgot Password?</a>
               </div>
          </div>
     )
}

export default Login
