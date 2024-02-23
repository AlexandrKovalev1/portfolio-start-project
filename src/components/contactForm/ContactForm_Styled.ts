import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";


/*Field styles */
const FieldWrapper = styled.div<{ field: "input" | "textarea" }>`
    position: relative;
    width: 100%;

    > :first-child {
        font-size: calc((100vw - 360px) / (1920 - 360) * (25 - 16) + 16px);
        width: 100%;
        outline: none;
        background-color: #FAFAFA;

        :focus-visible {
            border-color: ${theme.colors.accent};
            background-color: rgba(180, 179, 179, 0.13);
        }

        :focus + label, :not(:placeholder-shown) + label {
            transform: translateY(-1.5rem);
        }

        ::placeholder {
            opacity: 0;
        }

    }

    label {
        position: absolute;
        left: 0;
    }

    ${props => props.field === "input" && css<{ field: "input" | "textarea" }>`
        input {
            border: none;
            border-bottom: 2px solid #5A5A5A;
        }
    `};

    ${props => props.field === "textarea" && css<{ field: "input" | "textarea" }>`
        textarea {
            height: 100px;
            resize: initial;
            border: 2px solid #5A5A5A;
        }
    ;

        label {
            position: absolute;
            left: 2px;
            transform: translateY(3px);
        }

    `};
`;

/* Contact Form Styles*/

const ContactFormWrapper = styled.div`{
    position:fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999999999;
    width: 100vw;
    height: 100vh;
    padding: 30px 0;
    background-color: #FAFAFA;
`;

const ButtonClose = styled.button`
    position: absolute;
    width: 40px;
    height: 40px;
    top:0;
    right: 0;
    transform: translate(-100%, 100%);
    cursor: pointer;
    
    span {
        display: inline-block;
        position:relative;
        width:100%;
        height:100%;
        
        :before,:after {
            content: "";
            position: absolute;
            top:50%;
            left: 0;
            transform: translateY(-50%);
            display: inline-block;
            width: 100%;
            height: 4px;
            background-color: #5A5A5A;
            border-radius: 2px;
        }
        
        :after {
            transform: rotate(45deg);
            
        }

        :before {
            transform: rotate(-45deg);
        }
        
        :hover {
            :before,:after {
                background-color: ${theme.colors.accent};
            }
        }
    }
`;

const TitleBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;


    h2 {
        max-width: 40vw;
        font-size: calc((100vw - 360px) / (1920 - 360) * (25 - 16) + 16px);
    }
    
    a {
        color: #2D2D2D;
    }

    @media${theme.media.mobile} {
        justify-content: end;
        flex-wrap: wrap;
        gap: 10px;
        h2 {
            max-width: unset;
        }
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const SendBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media${theme.media.mobile} {
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }
`;

export const Styles = {
    FieldWrapper,
    Form,
    SendBlock,
    ContactFormWrapper,
    TitleBlock,
    ButtonClose
};