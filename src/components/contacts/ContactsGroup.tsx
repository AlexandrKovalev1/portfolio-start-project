import React from 'react';
import {ContactListItem} from "./contactListItem/ContactListItem";
import {Styles} from "./ContactsGroup_Styles";


type ContactsGroupPropsType = {
    menuState: Array<{
        iconId: string,
        href:string
        viewBox: string,
        id: number
    }>,
    type: "header" | "burger" | "footer",
}


export const ContactsGroup:React.FC<ContactsGroupPropsType> = ({menuState,type}) => {

    const contactsListItems = menuState.map(item =>
        <ContactListItem
            iconId={item.iconId}
            viewBox={item.viewBox}
            href={item.href}
            key={item.id}
        />);

    return (
        <Styles.ContactsGroupWrapper type={type}>
            <Styles.List>
                {contactsListItems}
            </Styles.List>
        </Styles.ContactsGroupWrapper>
    );
};

