import styled from "styled-components";

let StyledButton=styled.button`
    background:${props=>props.variant==="outlined"?"none":"red"};
    padding: 10px;
    border-radius: 5px;
    margin: 50px;
    color: ${props=>props.variant==="outlined"?"red":"white"};
    font-weight: bold;
    border: 1px solid red;
    &:hover
    {
        background:${props=>props.variant!=="outlined"?"none":"red"};
        color: ${props=>props.variant!=="outlined"?"red":"white"};
    }
`

let FancyButton=styled(StyledButton)`
    background-image: linear-gradient(to right,red,green);
    border: none;
`

let AddButton=styled(StyledButton).attrs({
    type:"submit"
})`
box-shadow:2px 2px green
`
export {StyledButton,FancyButton,AddButton}

