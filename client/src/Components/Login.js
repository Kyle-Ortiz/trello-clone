import React from 'react'

function Login() {
     return (
          <div className="signup-login-form">
               <div id="email-pass-input">
                    <h1 className="signup-login-header">Log in to Easy Boards</h1>
                    <form action="submit">
                         <input type="text" className="form"placeholder="Enter email"/>
                         <input type="password" className="form"placeholder="Enter password"/>
                         <input type="submit" className="active-login-signup-button" value="Login"/>
                    </form>
               </div>
          </div>
     )
}

export default Login
