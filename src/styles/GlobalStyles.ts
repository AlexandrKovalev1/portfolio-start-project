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
    
    * {
        scrollbar-width: thin;
        scrollbar-color: red white;
    }
    
    *::-webkit-scrollbar {
        height: 10px;
    }
    *::-webkit-scrollbar-track {
        background-color: #E5E9ED;
        
    }

    *::-webkit-scrollbar-track-piece {
        background-color: #F9F9F9;
    }

    *::-webkit-scrollbar-thumb {
        background-color:#E63946;
        border-radius: 10px;
    }

    body {
        min-width: 375px;
        margin: 0;
        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #FAFAFA;
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
        
    }
    
`;