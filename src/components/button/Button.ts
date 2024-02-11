import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


type ButtonPropsType = {
    nameOfType: "Get" | "Contact"|"HireMe"
    height: string
    width: string
};
export const Button = styled.button<ButtonPropsType>`
    width: ${props => props.width} ;
    height: ${props => props.height };
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.03em;
    text-align: center;
    border: 2px solid;
    border-radius: 30px;
    cursor: pointer;
    white-space:nowrap;

    :hover {
        color: ${theme.colors.accent};
    }

    ${props => props.nameOfType === "Get" && css<ButtonPropsType>`
        border-color: #9E9E9E;
    `};

    ${props => props.nameOfType === "Contact" && css<ButtonPropsType>`
        border-color: #5A5A5A;
    `};

    ${props => props.nameOfType === "HireMe" && css<ButtonPropsType>`
        background-color: ${theme.colors.primaryText};
        color: #ffffff;
        border-radius: unset;
        
        :hover {
            background-color: transparent;
            color: ${theme.colors.primaryText};
        }
    `};
    

`;