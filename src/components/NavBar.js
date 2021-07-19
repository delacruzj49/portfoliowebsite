import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme';
//react-bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

//assets
import Picture from '../assets/self.JPG';

class NavBar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MainNav defaultActiveKey="/home" className="flex-column">
                    <NavbarBrand href="#home">
                        <NavImage src={Picture}/>
                        <br/>
                        <Name>Juan De La Cruz</Name>
                        <JobTitle>Front End Developer</JobTitle>
                    </NavbarBrand>
                    <NavLink href="/home">Home</NavLink>
                    <NavLink eventKey="link-1">About</NavLink>
                    <NavLink eventKey="link-2">Projects</NavLink>
                </MainNav>
            </React.Fragment>
        );
    }
}

export default NavBar;


const MainNav = Styled(Nav)`
background-color:${Theme.colorAccent};
width:25%;
position:left;
height:1000px;

`
const NavLink = Styled(Nav.Link)`
color:${Theme.colorWhite};
margin:10% 0 0 10%;
font-size:${Theme.lengthMd3};
`
const NavbarBrand = Styled(Navbar.Brand)`
color:${Theme.colorWhite};
margin-top:10%;
`
const NavImage = Styled(Image)`
width:auto;
height: 200px;
border-radius:50%;
margin-left:25%;
`
const Name = Styled.h1`
font-size:${Theme.lengthLg1};
margin:0 0 0 10%;
text-align:center;
`
const JobTitle = Styled.h2`
font-size:${Theme.lengthMd1};
margin:0 0 0 10%;
text-align:center;
`