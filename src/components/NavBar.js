import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme/theme';

//import bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class NavigationBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navigation expand="lg">
                    <Navbar.Brand href="#home">Personal-Page</Navbar.Brand>
                    <Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Project</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navigation>
            </React.Fragment>
        );
    }
}

export default NavigationBar;



const Navigation = Styled(Navbar)`
background-color:none;
color:${Theme.colorText}
`

const Toggle = Styled(Navbar.Toggle)`
border:none;
`