import React from 'react';
import {ContactItem} from "./contactItem/ContactItem";
import {Styles} from "./ContactsGroup_Styles";


type ContactsGroupPropsType = {
    type: "desktop" | "burger"|"footer",
    closeModal?:React.Dispatch<React.SetStateAction<boolean>>
}


export const ContactsGroup:React.FC<ContactsGroupPropsType> = ({type,closeModal}) => {

    const menuContactsState = [
        {iconId: "github", viewBox: "0 0 88 88", href:"https://github.com/AlexandrKovalev1", id: 1},
        {iconId: "instagram", viewBox: "0 0 32 32", href:"#", id: 2},
        {iconId: "telegram", viewBox: "0 0 32 35", href:"https://t.me/FrontendDevAlexander", id: 3},
        {iconId: "whatsapp", viewBox: "0 0 32 32", href:"https://wa.me/79811064323", id: 4}
    ];


    const contacts = menuContactsState.map(item =>
        <ContactItem
            closeModal={closeModal}
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

