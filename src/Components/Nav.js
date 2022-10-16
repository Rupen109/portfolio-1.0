import React from 'react';
import styled from 'styled-components';
import Logo from '../imgs/Br_3.png';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {motion} from "framer-motion";

const Nav = () => {
    const {pathname} = useLocation();
  return (
    <StyledNav>
        <Dd>
        <img className='logo'  src={Logo} alt='logo'></img>
        
        </Dd>
        <h1><a href="#"> BHIMANI RUPEN</a></h1>
        <ul>
            <li>
                <Link className="md:text-lg text-[13px]" to="/">About Me</Link>
                <Line 
                transition={{duration: 0.45}}
                initial={{width: "0%"}}
                animate={{width: pathname === "/" ? "50%" : "0%"}}
                />
            </li>
            <li>
                <Link className="md:text-lg text-[13px]" to="/work" >My Projects</Link>
                <Line 
                transition={{duration: 0.45}}
                initial={{width: "0%"}}
                animate={{width: pathname === "/work" ? "50%" : "0%"}}
                /> 
            </li>
            <li>
                <Link className="md:text-lg text-[13px]" to="/contact">Contct Me</Link>
                <Line 
                transition={{duration: 0.45}}
                initial={{width: "0%"}}
                animate={{width: pathname === "/contact" ? "50%" : "0%"}}
                />
            </li>
        </ul>
    </StyledNav>
  );
}

const Dd = styled.div`

img{
    content: "";
}

`

const StyledNav = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
/* background: #0A162C; */
background: #10101A;
/* box-shadow: cyan 1px 20px 140px; */

@media (max-width:500px){
    max-width: fit-content;
    overflow: hidden;
}

h1 a{
    margin-left: -18rem;
    color: #23d997;
    @media (max-width:500px){
        display: none;
    }
}
    

a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    list-style: none;
}

li{
    padding-left: 6rem;
    position: relative;
}

.logo{
    width: 5rem;
    height: 3rem;
}
`;

const Line = styled(motion.div)`

height: 0.2rem;
border-radius: 1rem;
background: #23d997;
width: 5%;
position: absolute;
bottom: -50%;

@media (max-width:500px){
bottom: -20%;
}

`

export default Nav;