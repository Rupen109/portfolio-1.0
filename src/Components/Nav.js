import React from 'react';
import styled from 'styled-components';
import Logo from '../../../porfolio/src/imgs/Br (3).jpg';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
        <Dd>
        <img className='logo'  src={Logo} alt='logo'></img>
        </Dd>
        {/* <h1><a href="#">BHIMANI RUPEN</a></h1> */}
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

h1 a{
    margin-left: -18rem;
    color: #23d997;
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



`
export default Nav;