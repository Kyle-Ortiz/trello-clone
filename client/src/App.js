import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup'
import Login from './Components/Login'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;
