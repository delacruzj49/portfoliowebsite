import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

//pages components
import HomeProjects from './pages/HomeProjects.js';
import Contact from './pages/contact.js';
import About from './pages/about.js';
import NotFound from './pages/404.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeProjects/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
