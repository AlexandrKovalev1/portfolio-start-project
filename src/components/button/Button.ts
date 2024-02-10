import styled, {css} from "styled-components";


type ButtonPropsType = {
    nameOfType: "Get" | "Contact"
    height?: string
    width?: string
};
export const Button = styled.button<ButtonPropsType>`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.03em;
    text-align: center;
    border: 2px solid;
    border-radius: 31px;
    cursor: pointer;
    white-space:nowrap;


    ${props => props.nameOfType === "Get" && css<ButtonPropsType>`
        width: ${props => props.width || "215px"};
        height: ${props => props.height || "60px"};
        border-radius: 30px;
        border-color: #9E9E9E;


    `};

    ${props => props.nameOfType === "Contact" && css<ButtonPropsType>`
        width: ${props => props.width || "186px"};
        height: ${props => props.height || "60px"};
        border-radius: 30px;
        border-color: #5A5A5A;
    `};
    

`;