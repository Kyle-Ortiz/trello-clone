import React from 'react'
import Header from './Header';
import {useState} from 'react'
import {useNavigate} from'react-router-dom';
import Signup from './Signup';

function Homepage() {
     const [homeEmail,setHomeEmail] = useState("");
     const [isSigned, setIsSigned] = useState(false);
     function handleSubmit(e) {
          e.preventDefault();
          setIsSigned(true)
     }

     return (
          <div>
               { isSigned ? <Signup homeEmail={homeEmail}/> :
               <div>
                    <Header />
                    <form action="submit">
                         <input type="text" className="form"placeholder="Email" value={homeEmail} onChange={(e)=> setHomeEmail(e.target.value)}/>
                         <button onClick={(e)=> handleSubmit(e)}> Sign Up! </button>
                    </form>
               </div>}
          </div>
          
     )
}

export default Homepage
