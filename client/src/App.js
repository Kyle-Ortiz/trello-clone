import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup'
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
          <Route path="/home" element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
