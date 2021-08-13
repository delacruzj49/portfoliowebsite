import React from 'react';
import Style from 'styled-components';
import Theme from '../theme';
import Image from '../assets/landing.jpg';
import {BrowserRouter as Router , Link} from 'react-router-dom';
class HomeProjects extends React.Component{
    render(){
        return(
            //pass page as props to DisplayWin
           <Router>
            <Page>
                    <Welcome primary >Welcome!</Welcome>
                    <About>My Name Is Juan,and I'm a web developer located in Houston,Texas.</About>
                    <LinkPage to='/about'>Learn More About Me</LinkPage>
            </Page>
           </Router>
        );
    }
}


export default HomeProjects;

const Page = Style.div`
height:100%;
width:auto;
background-image:url(${Image});
background-size:cover;
overflow:hidden;
border-color:${Theme.colorAccent};
border-style:solid;
border-radius:2%;
border-width:.5rem;
text-align:center;
`

const Welcome = Style.h1`
text-align:center;
font-size:${Theme.lengthLg3};
margin: 30vh 0 2vh 0;
color:${Theme.colorWhite};
`
const About = Style.h2`
text-align:center;
font-size:${Theme.lengthMd3};
color:${Theme.colorWhite}
`

const LinkPage = Style(Link)`
text-align:center;
font-size:${Theme.lengthMd2};
color:${Theme.colorAccent};

`
