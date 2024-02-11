import React from 'react';
import styled, {css} from "styled-components";
import {ContactListItem} from "./contactListItem/ContactListItem";


type ContactsGroupPropsType = {
    menuState: Array<{
        iconId: string,
        href:string
        viewBox: string,
        id: number
    }>,
    type: "header" | "burger" | "footer",
}


export const ContactsGroup = (props: ContactsGroupPropsType) => {

    const contactsListItems = props.menuState.map(item =>
        <ContactListItem
            iconId={item.iconId}
            viewBox={item.viewBox}
            href={item.href}
            key={item.id}
        />);

    return (
        <ContactsGroupWrapper type={props.type}>
            <ul>
                {contactsListItems}
            </ul>
        </ContactsGroupWrapper>
    );
};

type ContactsGroupWrapperPropsType = {
    type: "header" | "burger" | "footer",
}

const ContactsGroupWrapper = styled.div<ContactsGroupWrapperPropsType>`
    ul {
        display: flex;
        gap: 20px;
    };
    

    ${props => props.type === "burger" && css<ContactsGroupWrapperPropsType>`
        ul {
            justify-content: center;
            gap: 50px;
        }
    `};

    ${props => props.type === "footer" && css<ContactsGroupWrapperPropsType>`
        svg {
            width: 17px;
        }
    `};
    
`;
