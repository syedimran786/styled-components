import styled,{keyframes} from "styled-components";



let rotate=keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(-360deg);
}
`

let RotateImage=styled.img`
height: 200px;
width: 200px;
animation: ${rotate} 2s linear infinite;
`
export {RotateImage}