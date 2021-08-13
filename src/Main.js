import React from 'react';
import NavBar from './components/NavBar';
import Styled from 'styled-components';
import Theme from './theme.js';
import DisplayWin from './components/DisplayWindow';
import {BrowserRouter as Router} from 'react-router-dom';

class HomeProjects extends React.Component{
    render(){
        return(
            //pass page as props to DisplayWin
            <Router>
                <Page>
                    <NavBar/> 
                    <DisplayWin/>
                </Page>
            </Router>
            
        );
    }
}


export default HomeProjects;

const Page = Styled.div `
margin:auto;
width:auto;
height:1000px;
background-color:${Theme.colorPrimary};
display:flex;
`