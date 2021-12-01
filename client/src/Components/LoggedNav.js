import React from 'react'

function LoggedNav() {
     return (
          <div className="dash-nav">
               <div className="image-container">
                    <img src="https://i.ibb.co/XXRF8hy/2dc7b9004b6948018984e5c013ec7771.png" alt="Logo" />
                    <h3>Easy Boards</h3>
               </div>
               <div className="search-field">
                    <input type="text" placeholder="Search for a board"/>
               </div>
               <div className="account-notification">
                    <img src="https://i.ibb.co/sWty2kW/avatar.png" alt="profile picture" />
                    <img src="" alt="notification bell" />
               </div>
          </div>
     )
}

export default LoggedNav
