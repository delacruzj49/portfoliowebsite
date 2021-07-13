import React from 'react';
import NavBar from '../components/NavBar';
import Styled from 'styled-components';
import Theme from '../theme.js';

class HomeProjects extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <Page>
                <NavBar/> 
                </Page>
                
            </React.Fragment>
        );
    }
}


export default HomeProjects;

const Page = Styled.div `
margin:auto;
width:auto;
height:2000px;
background-color:${Theme.colorPrimary};

`