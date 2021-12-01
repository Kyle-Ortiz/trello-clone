import React from 'react'

function LoggedNav() {
     return (
          <div className="dash-nav">
               <div className="image-container">
                    <img src="" alt="" />
                    <h3>Easy Boards</h3>
               </div>
               <div className="search-field">
                    <input type="text" placeholder="Search for a board"/>
               </div>
               <div className="account-notification">
                    <img src="" alt="profile picture" />
                    <img src="" alt="notification bell" />
               </div>
          </div>
     )
}

export default LoggedNav
