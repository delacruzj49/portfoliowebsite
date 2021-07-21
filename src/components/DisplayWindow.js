import React from 'react';
import Styled from 'styled-components';
import Theme from '../theme.js';



class Display extends React.Component{
    render(){
        return(
            //Insert Page in to display component
            <React.Fragment>
                <DisplayWin> 
                </DisplayWin>
            </React.Fragment>
            
        )
    }
}

export default Display;


const DisplayWin = Styled.h1`
margin:3% 0 10% 10% ;
height:auto;
background:${Theme.colorWhite};
width:60%;
border-color:${Theme.colorAccent};
border-style:solid;
border-radius:2%
`