
import './App.css';
import Navbar from './Navbar';
import AboutUs from './AboutUs'
import Team from './Team';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
        <Navbar/>
            <div>
              <Switch>
                <Route exact path = "/micp-website" component = {Home}/>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/about" component = {AboutUs}/>
                <Route exact path = "/team" component = {Team}/>
              </Switch>
            </div>
        </div>
        </Router>
    </div>
  );
}

export default App;
