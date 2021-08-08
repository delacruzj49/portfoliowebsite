import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Styled from 'styled-components';
//pages components
import Home from './pages/Home.js';
import Projects from './pages/projects.js';
import About from './pages/about.js';
import NotFound from './pages/404.js';

// importing main theme
import Theme from './theme.js'
import Picture from './assets/self.JPG';

//importing icons from react-icons
import {AiOutlineHome} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdWork} from 'react-icons/md';

//importing components from react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
const routes = [
  {
  path:'/',
  exact:true,
  main: () => <Home/>
},
{
  path:'/about',
  exact:true,
  main:() => <About/>
},
{
  path:'/projects',
  exact:true,
  main:() => <Projects/>
},
{
  path:'*',
  exact:false,
  main:() => <NotFound/>
}]

function App() {
  return (
    <Router>
    <MainWindow>
      <MainNav className='flex-column'>
        <NavbarBrand>
          <NavImage src={Picture}/>
          <br/>
          <Name>Juan De La Cruz</Name>
          <JobTile>Front End Developer</JobTile>
        </NavbarBrand>
        
       
        <NavLink to="/" >
            <HomeIcon/>
            Home
        </NavLink>  
        <NavLink to="/about">
          <AboutIcon/>
          About
        </NavLink>
        <NavLink to="/projects">
          <ProjectIcon/>
          Projects
        </NavLink>
        
          
  
      </MainNav>

      <ComponentWindow style={{ flex: 1, padding: "10px" }}>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </ComponentWindow>
    </MainWindow>
  </Router>
  );
}

export default App;

//Styling component for side bar

const MainWindow = Styled.div`
display:flex;
background-color:${Theme.colorPrimary};
height:100vh;
`

const MainNav = Styled(Nav)`
background-color:${Theme.colorAccent};
width:20%;
position:left;
height:80vh;
margin:10vh 0 0 10vh;
`

const NavbarBrand = Styled(Navbar.Brand)`
color:${Theme.colorWhite};
margin-top:10%;
text-align:center;
`

const NavImage = Styled(Image)`
width:auto;
height:20vh;
border-radius:50%;
border-style:solid;
border-color:${Theme.colorPrimary};
`

const Name = Styled.h1`
font-size:${Theme.lengthMd3};
`

const JobTile = Styled.h2`
font-size:${Theme.lengthMd1};

`

const NavLink = Styled(Link)`
width:auto;
color:${Theme.colorWhite};
padding:0 0 0 10%;
font-size:${Theme.lengthMd2};
&:hover{
  text-decoration:none;
  color:${Theme.colorWhite};
  background-color:${Theme.colorPrimary};
  border-right:${Theme.colorWhite};
  border-right: 5px solid ${Theme.colorwhite};
}

`

//Styling Component for window displaying components

const ComponentWindow = Styled.div`
margin:10vh 10vh 0 0; 
height:80vh;
background:${Theme.colorWhite};
width:60%;
`

//styled icons

const HomeIcon = Styled(AiOutlineHome)`
color:${Theme.colorWhite};
margin:5%;
padding: 0 2% 1% 0 ;
`
const AboutIcon = Styled(BsInfoCircle)`
color:${Theme.colorWhite};
padding: 0 2% 1% 0 ;
margin:5%;
`
const ProjectIcon = Styled(MdWork)`
color:${Theme.colorWhite};
padding: 0 2% 1% 0 ;
margin:5%;

`