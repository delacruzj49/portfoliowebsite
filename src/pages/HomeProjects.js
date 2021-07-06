import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme/theme.js';
//Import components
import Navbar from '../components/NavBar.js';
//import bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';

import Image from '../assets/hero.png';


class HomeProjects extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Page>
                    <Hero fluid> 
                        <Header>Web Developer</Header>
                    </Hero>
                   
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
`
const Hero = Styled(Jumbotron)`
background-image: url(${Image});
background-size:cover;
height:auto;
`
const Header = Styled.div`
color:${Theme.colorPrimary};
font-size:${Theme.lengthLg1};
background-color:${Theme.colorWhite};
margin:0 25%;
padding:2% 2%;
text-align:center;
`