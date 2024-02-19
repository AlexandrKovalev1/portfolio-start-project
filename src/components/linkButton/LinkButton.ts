import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type LinkButtonPropsType = {
    width: string
    height: string
    type?: "outlined" | "viewProject"
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
    white-space: nowrap;
    cursor: pointer;
    

    
    @media${theme.media.mobile} {
        width: calc(${props => props.width} * 0.7);
        line-height: calc(${props => props.height} * 0.8);
    }
    

    ${props => props.type==="outlined" && css<LinkButtonPropsType>`
        background-color: transparent;
        border: 2px solid #E1E1E1;
        color: ${theme.colors.primaryText};

        :hover {
            background-color: ${theme.colors.primaryText};
            color: #ffffff;
        }
    `};
    
    ${props => props.type==="viewProject" && css<LinkButtonPropsType>`
        font-size: 22px;
        border-radius: 30px;
        
        :hover {
            color: #ffffff;
            outline: 3px solid white;
        }
    `}

`;

