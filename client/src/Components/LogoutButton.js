import React from 'react'
import {useNavigate} from 'react-router-dom'

function LogoutButton({user,setUser}) {
     const navigate = useNavigate();

     const logout = () => {
          if (window.confirm('Are you sure you want to logout?') === true) {
          
          fetch("/logout", {
               method: "DELETE",
             }).then(() => setUser(null));
             navigate('/login')
          }
     }
     return (
          <button onClick={logout} className="buttons" id="logout-button">
               Sign out
          </button>
     )
}

export default LogoutButton
