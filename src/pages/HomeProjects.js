import React from 'react';
import Styled, { keyframes } from 'styled-components';

//Import components
import Navbar from '../components/NavBar.js';

const Page = Styled.div`
margin: auto;
width: auto;
height: 2000px;
background-color: black;
text-align:center;
`

const Typing = keyframes`
from { width: 0 }
  to { width: 100% }
`;

const Blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: green; }
`;


const Welcome = Styled.h1`
overflow: hidden;
border-right: .15em solid green; 
white-space: nowrap;
margin: 0 auto; 
letter-spacing: .15em; 
color:#33FF00;
animation: 
    ${Typing} 3.5s steps(40, end),
    ${Blink} .60s step-end infinite;
`

class HomeProjects extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Page>
                    <Welcome>Hello Welcome To My Page</Welcome>
                </Page>
            </React.Fragment>
        );
    }
}


export default HomeProjects;