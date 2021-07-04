import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme/theme.js';
//Import components
import Navbar from '../components/NavBar.js';

const Page = Styled.div`
margin: auto;
width: auto;
height: 2000px;
background-color: ${Theme.colorGray};
text-align:center;
`

class HomeProjects extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Page>
                    
                </Page>
            </React.Fragment>
        );
    }
}


export default HomeProjects;