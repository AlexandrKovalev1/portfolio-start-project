import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        margin: 0;
        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #FFFFFF;
        line-height: 1.2;
        color: ${theme.colors.primaryText};
    }

    a {
        text-decoration: none;

        :hover {
            color: ${theme.colors.accent};
        }
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        
        &:hover {
            color: ${theme.colors.accent};
            border-color: ${theme.colors.accent};
        }
    }
    
`;