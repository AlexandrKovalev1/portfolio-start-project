import styled, {css} from "styled-components";

type ContactsGroupWrapperPropsType = {
    type: "desktop" | "burger" | "footer",
}

const List = styled.ul``;

const ContactsGroupWrapper = styled.div<ContactsGroupWrapperPropsType>`
    
    ${List} {
        display: flex;
        gap: 20px;
    };
    

    ${props => props.type === "burger" && css<ContactsGroupWrapperPropsType>`
        ${List} {
            justify-content: center;
            gap: 50px;

            @media screen and (max-height: 650px)  and (max-width:600px) and (orientation: landscape) {
                gap:20px;
                
                svg {
                    width: 20px;
                };
            };
        };
    `};

    ${props => props.type === "footer" && css<ContactsGroupWrapperPropsType>`    position: absolute;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%);
        
       & ${List} svg {
            width: 17px;
        }
    `};
    
`;

export  const Styles = {
    List,
    ContactsGroupWrapper
};