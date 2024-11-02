
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BgParticles from './components/BgParticles/BgParticles';
import Footer from './components/Footer/Footer';

// AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AllProjects from './components/AllProjects/AllProjects';
// ..
AOS.init();


function App() {
  return (
    <div className="bg-custom" >
      <Router>
        {/* <Header></Header> */}

        {/* <BgParticles/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route  path="/moreProjects">
            <AllProjects />
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>

    </div>
  );
}

export default App;
