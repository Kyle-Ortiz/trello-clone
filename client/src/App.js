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
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const initialUserState = atom({
  key: "initialUserState",
  defaultValue: null
});

function App() {
  const [user,setUser] = useRecoilState(initialUserState);

  useEffect(()=> {
    fetch('/sessions').then(r => r.json()).then((data)=> {
      if (data.id) {
        setUser(data);
      }
    })
  }, [])



  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/home" element={<Homepage />}/>
          <Route path="/dashboard" element={<Dashboard user={user}/>}/>
        </Routes>
      </RecoilRoot>
        {user ? <p>Welcome, {user.username}</p> : <p>Welcome, please log in</p>}
    </div>
  );
}

export default App;
