import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup'
import Login from './Components/Login'
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
      <Header />
      {user ? <p>Welcome, {user.username}</p> : <p>Welcome, please log in</p>}
      <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;
