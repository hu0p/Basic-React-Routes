import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


const Navigation = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

const Home = () => (
  <div className="hero">
    <h1 className="landingcta">Welcome</h1>
  </div>
);

const About = () => (
  <div className="hero">
    <h1>About</h1>
  </div>
);

const Work = ({ match }) => (
  <div className="hero">
    <h1>Work</h1>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:worksId`} component={Works} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a Work.</h3>}
    />
  </div>
);

const Works = ({ match }) => (
  <div>
    <h1>{match.params.worksId}</h1>
  </div>
);

const Contact = () => (
  <div className="hero">
    <h1>Contact</h1>
  </div>
);

export default Navigation;