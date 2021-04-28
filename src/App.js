import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
// import Services from './components/pages/Services/Services';
// import AboutMe from './components/pages/AboutMe/AboutMe';
// import Contact from './components/pages/Contact/Contact';
// import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* /* <Route path='/services' component={Services} /> */}
        {/* <Route path='/about-me' component={AboutMe} /> */}
        {/*  <Route path='/contact' component={Contact} />  */}
      </Switch>
    </Router>
  );
}

export default App;
