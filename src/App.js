
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="bg-green-100" >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/#about">
            <Home />
          </Route>
          <Route exact path="/skills">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Home />
          </Route> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
