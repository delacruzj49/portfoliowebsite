import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme.js';
import Image from '../assets/welcome.jpg';
import {BrowserRouter as Router } from 'react-router-dom'; 

class Home extends React.Component{
    render(){
        return(
            <Router>
                <Page>
                    <Welcome>Welcome!</Welcome>
                    <About>My Name Is Juan, And I Am A Web Developer Located In Houston,Texas</About>
                    <Resume href="/about">Learn More About Me</Resume>
                </Page>
            </Router>
        );
    }
}


export default Home;

const Page = Styled.div`
background-image:url(${Image});
background-size:cover;
height:78vh;
width:auto;
text-align:center;
overflow:hidden;
border-radius:10px;
`

const Welcome = Styled.h1`
margin-top:25vh;
color: ${Theme.colorWhite};
font-size:${Theme.lengthLg3};
`

const About = Styled.h2`
color: ${Theme.colorWhite};
font-size:${Theme.lengthMd3};
`
const Resume= Styled.a`
border:none;
background:none;
font-size:${Theme.lengthMd2};
color:${Theme.colorAccent};
&:hover{
    color:${Theme.colorWhite};
}
`