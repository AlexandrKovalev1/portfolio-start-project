import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Link = styled.a`
    font-weight: 700;
    color: ${theme.colors.primaryText};
    white-space: nowrap;
    transition:300ms;
    
    :hover {
        color: ${theme.colors.primaryText};
        -moz-text-shadow:0 0 10px ${theme.colors.accent}; 
        -webkit-text-shadow:0 0 10px ${theme.colors.accent}; 
        text-shadow:0 0 10px ${theme.colors.accent};
    }
    
`;

export const Styles = {
    Link
}