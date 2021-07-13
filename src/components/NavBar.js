import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Styled from 'styled-components';



class NavBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <MainNav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                    <Nav.Link eventKey="link-2">Projects</Nav.Link>
                </MainNav>
            </React.Fragment>
        );
    }
}

export default NavBar;


const MainNav = Styled(Nav)`
background-color:black;
width:25%;
position:left;
height:2000px;
`
