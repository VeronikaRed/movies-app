import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;  // 10px => 1rem
}

body{
    font-size: 1.6rem; 
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
}
`;
