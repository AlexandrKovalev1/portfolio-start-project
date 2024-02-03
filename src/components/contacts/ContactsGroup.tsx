import React from 'react';
import styled from "styled-components";
import {ContactListItem} from "./contactListItem/ContactListItem";


type ContactsGroupPropsType = {
    menuState: Array<{
        iconId: string,
        viewBox: string,
        id: number
    }>,
}


export const ContactsGroup = (props: ContactsGroupPropsType) => {

    const contactsListItems = props.menuState.map(item =>
        <ContactListItem
            iconId={item.iconId}
            viewBox={item.viewBox}
            key={item.id}
        />);

    return (
        <ContactsGroupWrapper>
            <ul>
                {contactsListItems}
            </ul>
        </ContactsGroupWrapper>
    );
};

const ContactsGroupWrapper = styled.div`
    ul {
        display: flex;
        gap: 20px;
    }
`;
