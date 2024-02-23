import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Link = styled.a`
    
    svg {
        fill: ${theme.colors.primaryText};
        transition: 300ms;
    }
;
`;

const ListItem = styled.li`
    
    :hover ${Link} svg {
        fill: ${theme.colors.accent};
    }
;
`;


export const Styles = {
    ListItem,
    Link,
};
