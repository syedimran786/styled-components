import styled from "styled-components";

let Tbutton=styled.button`
padding: 20px;
border-radius: 5px;
margin: 50px;
border: ${props=>props.theme.light.border};
background-color:${props=>props.theme.light.bgclr};
color:${props=>props.theme.light.textclr} ;
 ;
`

export {Tbutton}