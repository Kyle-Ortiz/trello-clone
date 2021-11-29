import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup'
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
