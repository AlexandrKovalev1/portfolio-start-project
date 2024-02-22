import React from 'react';
import {ContactItem} from "./contactItem/ContactItem";
import {Styles} from "./ContactsGroup_Styles";


type ContactsGroupPropsType = {
    menuState: Array<{
        iconId: string,
        href:string
        viewBox: string,
        id: number
    }>,
    type: "desktop" | "burger"|"footer",
}


export const ContactsGroup:React.FC<ContactsGroupPropsType> = ({menuState,type}) => {

    const contacts = menuState.map(item =>
        <ContactItem
            iconId={item.iconId}
            viewBox={item.viewBox}
            href={item.href}
            key={item.id}
        />);

    return (
        <Styles.ContactsGroupWrapper type={type}>
            <Styles.List >
                {contacts}
            </Styles.List>
        </Styles.ContactsGroupWrapper>
    );
};

