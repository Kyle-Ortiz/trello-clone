import React from 'react'
import {useNavigate} from 'react-router-dom'

function LogoutButton({user,setUser}) {
     const navigate = useNavigate();

     const logout = () => {
          if (window.confirm('Are you sure you want to logout?') === true) {
          navigate('/login')
          setUser(null);
          fetch('/logout')
          }
     }
     return (
          <button onClick={logout}>
               Logout
          </button>
     )
}

export default LogoutButton
