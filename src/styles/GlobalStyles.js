import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;  // 10px => 1rem
    height: 100%
}

body{
    height: 100%
}

body, button, input, textarea{
    font-size: ${props => props.theme.defaultFontSize}; 
    font-weight: 500;
    font-family: ${props => props.theme.defaultFontFamily};
}

button{
    cursor: pointer;
}

#root{
    height: 100%
}
`;
