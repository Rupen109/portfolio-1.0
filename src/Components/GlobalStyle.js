import { createGlobalStyle } from "styled-components"
import Bg from '../imgs/blurry.png';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

body{
    background: #10101A;
    /* background: #111827; */
}

button{
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}


h2{
    font-weight: lighter;
    font-size: 4rem;
    color: #ccc;
}    

h3{
    color: white;
}

p{
    padding: 1rem 0rem;
    font-size: 1.5rem;
    color: #ccc;
    line-height: 150%;
}

h4{
    font-weight: bold;
    font-size: 2rem;
}

span{
    font-weight: bold;
    color: #23d997;
}

a{
    font-size: 1.1rem;
}

`;

export default GlobalStyle;