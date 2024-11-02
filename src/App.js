
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Footer from './components/Footer/Footer';

// AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AllProjects from './components/AllProjects/AllProjects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
// ..
AOS.init();


function App() {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "portfolio";
  const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);
// console.log('patj',capitalizedPath);

  return (
    <div className="" >
     
        <Header logoTag={capitalizedPath}></Header>

        {/* <BgParticles/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>

          <Route  path="/moreProjects">
            <AllProjects />
          </Route>
        </Switch>
        <Footer logoTag={capitalizedPath}></Footer>
 

    </div>
  );
}

export default App;
