import React from 'react'
import {useState} from 'react'
import LogoTitle from './LogoTitle';
// import Login from './Login'
import {useNavigate} from 'react-router-dom'


function Signup({homeEmail = ""}) {
     const [email,setEmail] = useState(homeEmail);
     const [password, setPassword] = useState("");
     const [username,setUsername] = useState("");
     const [errors,setErrors] = useState(null);

     const navigate = useNavigate();

     function changeHandler(e, name) {
          if (name === email) {
               setEmail(e.target.value);
          } else if (name === username) {
               setUsername(e.target.value);
          } else if (name === password) {
               setPassword(e.target.value);
          }   
     }

     function serverErrors(errors) {
          let key = 0
          const allErrors = errors.map((error)=> {
               key++
               return <p key={key}>{error}</p>
          })
          return allErrors
     }

     function formSubmit(e) {
          e.preventDefault();

          const newUserObject = {
               email: email,
               username: username,
               password: password,
          }

          fetch("/signup", {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                  },
               body: JSON.stringify(newUserObject)
          }).then((res) => {
               if (res.ok) {
                    navigate("/login");
               } else {
                    res.json().then((errors)=>{
                    setErrors(errors)
                    })
               }
          })
     }
     return (
          <div className="container">
               <div className="mid-column">
                    <LogoTitle />
                    <div className="signup-login-form">
                         <div id="email-input">
                         <h1 className="signup-login-header">Sign up for your account</h1>
                         {errors ? <div className="error-div">{serverErrors(errors)}</div> : null}
                         <form action="submit" onSubmit={(e)=> formSubmit(e)}>
                              <input type="text" onFocus={()=> setErrors(null)}className="form"onChange={(e)=> changeHandler(e,email)}placeholder="Enter email" value={email}/>
                              <input type="text"  onFocus={()=> setErrors(null)}className="form" onChange={(e) => changeHandler(e,username)}placeholder="Enter username" value={username}/>
                              <input type="text" onFocus={()=> setErrors(null)}className="form" onChange={(e)=> changeHandler(e,password)}placeholder="Enter password" value={password}/>
                              <input type="submit" className="active-login-signup-button" value="Sign up!" />
                         </form>
                         </div>
                    </div>
               </div> 
          </div>
     )
}

export default Signup
