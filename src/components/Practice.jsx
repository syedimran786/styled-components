import React from 'react'
import { AddButton, FancyButton, StyledButton } from './buttons/Button'
import { RotateImage } from './buttons/RotateImage'
import logo from './logo192.png';
import { createGlobalStyle } from 'styled-components';

function Practice() {

    let GlobalStyles=createGlobalStyle`
        
        button{
            font-family: algerian;
        }
    `
  return (
    <div>
        <GlobalStyles/>
        <StyledButton>Submit</StyledButton>
        <StyledButton variant="outlined">Submit</StyledButton>
        <FancyButton as="a">Submit</FancyButton>
        <AddButton>Add</AddButton>
        <RotateImage src={logo}/>
    </div>
  )
}

export default Practice