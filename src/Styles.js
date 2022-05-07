import styled from "styled-components";

export const About = styled.div`
   min-height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`

export const Description = styled.div`
  
  h2{
    font-weight: lighter;
  }
`

export const Image = styled.div`
   flex: 1;
   background-size: cover;
  img{
    width: 45vh;
    height: 45vh;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    object-position: top;
    border: 3px solid #65FEDA;
  }  
`;
