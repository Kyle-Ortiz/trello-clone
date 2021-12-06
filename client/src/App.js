import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Homepage from './Components/Homepage'
import Dashboard from './Components/Dashboard';
import {useState, useEffect} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [user,setUser] = useState(null);

  useEffect(()=> {
    fetch('/sessions').then(r => r.json()).then((data)=> {
      if (data.id) {
        setUser(data);
      }
    })
  }, [])



  return (
    <div className="App">
      <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/home" element={<Homepage />}/>
          <Route path="/dashboard" element={<Dashboard user={user}/>}/>
        </Routes>
        {user ? <p>Welcome, {user.username}</p> : <p>Welcome, please log in</p>}
    </div>
  );
}

export default App;
