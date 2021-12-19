import React from 'react'
import {useState} from 'react'
import { VscAccount } from "react-icons/vsc";
import LogoutButton from './LogoutButton'

function LoggedNav({setUser}) {
     const [searchVal, setSearchVal] = useState("");

     return (
          <div className="dash-nav">
               <div className="image-container">
                    <img src="https://i.ibb.co/XXRF8hy/2dc7b9004b6948018984e5c013ec7771.png" alt="Logo" />
                    <h3>Easy Boards</h3>
               </div>
               <div className="search-field">
                    <input type="text" id="board-search" placeholder="Search for a board" onChange={(e)=> setSearchVal(e.target.value)}value={searchVal}/>
               </div>
               <div className="categories">
                    <a href="/Favorites">Favorited</a>
                    <a href="/dashboard">Your Boards</a>
                    <a href="/Shared">Shared with you</a>
               </div>
               <div className="account-notification">
                    <VscAccount />
               </div>
               <LogoutButton setUser={setUser}/>
          </div>
     )
}

export default LoggedNav
