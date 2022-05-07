import React from 'react';
import styled from 'styled-components';
import Logo from '../imgs/RbLogo.png';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
        <h1><a href="#">Capture</a></h1>
        {/* <img className='logo'  src={Logo} alt='logo'></img> */}
        <ul>
            <li>
                <Link to="/">About Me</Link>
            </li>
            <li>
                <Link to="/work" >My Projects</Link> 
            </li>
            <li>
                <Link to="/contact">Contct Me</Link>
            </li>
        </ul>
    </StyledNav>
  );
}

const StyledNav = styled.div`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #0A162C;
box-shadow: cyan 1px 20px 140px;

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
    /* width: 4rem; */
    /* height: 2rem; */
}



`
export default Nav;