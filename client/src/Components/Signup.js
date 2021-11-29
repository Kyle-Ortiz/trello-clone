import React from 'react'
import {useState} from 'react'
function Signup() {
     const [email,setEmail] = useState("")

     return (
          <div id="signup-form">
               <div id="email-input">
                    <h1>Sign up for your account</h1>
                    <form action="submit">
                         <input type="text" onChange={(e)=> setEmail(e.target.value)}placeholder="Enter Email" value={email}/>
                    </form>
               </div>
          </div>
     )
}

export default Signup
