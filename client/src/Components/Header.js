import React from 'react'
import {useState} from "react"

function Header() {
     const [navBar,setNavBar] = useState(false)

     const scrollBackground = () => {
          if (window.scrollY > 55) {
               setNavBar(true)
          } else {
               setNavBar(false)
          }
     }

     window.addEventListener('scroll', scrollBackground)

     return (
          <header className={navBar ? "fix-header active" : "fix-header"}>
               <nav className="navbar">
               <div className='nav-left'>
                    <img id="nav-logo" src="https://i.ibb.co/XXRF8hy/2dc7b9004b6948018984e5c013ec7771.png" alt="Logo"/>
                    <p>Easy Boards</p>
               </div>
               
               <div className="nav-right-buttons">
                    <a className="buttons"id="login-button" href="/login">Log In</a>
                    <a className="buttons blue-button" href="/signup">Sign up</a>
               </div>
               </nav>
          </header>
     )
}

export default Header
