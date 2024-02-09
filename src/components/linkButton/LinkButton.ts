import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type LinkButtonPropsType = {
    width: string
    height: string
    outlined?: boolean
}
export const LinkButton = styled.a<LinkButtonPropsType>`
    display: inline-block;
    width: ${props => props.width};
    line-height: ${props => props.height};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: ${theme.colors.primaryText};
    color: #ffffff;

    ${props => props.outlined && css<LinkButtonPropsType>`
        background-color: transparent;
        border: 2px solid #E1E1E1;
        color: ${theme.colors.primaryText};
    `}

    :hover{
        background-color: ${theme.colors.accent};
        color:#ffffff;
    }
`;

