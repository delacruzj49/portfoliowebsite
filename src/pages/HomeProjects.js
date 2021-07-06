import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme/theme.js';
//Import components
import Navbar from '../components/NavBar.js';
//import bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';



class HomeProjects extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Page>
                    <Hero fluid>  </Hero>
                    
                </Page>
            </React.Fragment>
        );
    }
}


export default HomeProjects;


const Page = Styled.div`
margin: auto;
width: auto;
height: 2000px;
background-color: ${Theme.colorGray};
text-align:center;
`
const Hero = Styled(Jumbotron)`
background-color:${Theme.colorwhite};
background-image: -webkit-linear-gradient(30deg, ${Theme.colorPrimary} 50%, ${Theme.colorAccent} 50%);
`