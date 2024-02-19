import React from 'react';
import {Navigation} from "./navigation/Navigation";
import {ContactsGroup} from "../contacts/ContactsGroup";

type MenuPropsType = {
    type:"desktop"|"burger"
}
export const Menu:React.FC<MenuPropsType> = ({type}) => {
    const navMenuHeaderState = [
        {itemHeading: "Home", link: "", id: 1},
        {itemHeading: "About", link: "", id: 2},
        {itemHeading: "Tech Stack", link: "", id: 3},
        {itemHeading: "Projects", link: "", id: 4},
        {itemHeading: "Contact", link: "", id: 5}
    ];

    const menuContactsState = [
        {iconId: "iconGithub", viewBox: "0 0 88 88", href:"#", id: 1},
        {iconId: "instagram", viewBox: "0 0 32 32", href:"#", id: 2},
        {iconId: "telegram", viewBox: "0 0 32 35", href:"#", id: 3},
        {iconId: "whatsapp", viewBox: "0 0 32 32", href:"#", id: 4}
    ];


    return (
        <>
            <Navigation menuState={navMenuHeaderState} type={type}/>
            <ContactsGroup menuState={menuContactsState} type={type}/>
        </>
    );
};

