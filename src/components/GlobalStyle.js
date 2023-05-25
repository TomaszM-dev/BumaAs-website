import { createGlobalStyle } from "styled-components";

// colors :

// white 60% #fff
// dark 30% #606060
// blue 10% #1119D6

const GlobalStyle = createGlobalStyle`
  
  * {

    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  ul{
    list-style:none;

  }
  

  html{
    @media(max-width:1400px){
      font-size: 75%
    }
    @media(max-width:1300px){


    }
  }


  body {
    background: white;
    color:  #606060;
    font-family: 'Raleway', sans-serif;

  }

  button {
    font-weight:bold;
    font-size: 1.1rem;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #1119D6;
    background:transparent;
    color:white;
    transition:all 0.5s ease;

    &:hover {
      background-color: #1119D6;
      color: white;
    }
  }

  h2{
    font-weight: lighter;
    font-size: 3.5rem;
  }
  h3{


  }

  h4{
    font-weight: bold;
    font-size: 2rem
  }

  p{
    padding: 3rem 0rem;

    font-size: 1.2rem;
    line-height: 150%;
  }

  a{
    font-size:1.1rem
  }

  span{
    font-weight: bold;
    color:#1119D6;
  }

`;

export default GlobalStyle;
