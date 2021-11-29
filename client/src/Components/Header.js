import React from 'react'

function Header() {
     return (
          <header className="fix-header">
               <nav className="navbar">
               <a href="/home"> <img id="nav-logo" src="https://i.ibb.co/XXRF8hy/2dc7b9004b6948018984e5c013ec7771.png" alt="Logo"/>
               Easy Boards
               </a>
               <div className="nav-right-buttons">
                    <a className="buttons"id="login-button" href="/login">Log In</a>
                    <a className="buttons"id="signup-button" href="/signup">Sign up</a>
               </div>
               </nav>
          </header>
     )
}

export default Header
