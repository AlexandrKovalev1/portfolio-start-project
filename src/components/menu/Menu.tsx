import React from 'react';
import {Navigation} from "./navigation/Navigation";
import {ContactsGroup} from "../contacts/ContactsGroup";

type MenuPropsType = {
    type:"desktop"|"burger",
    closeModal?:React.Dispatch<React.SetStateAction<boolean>>
}
export const Menu:React.FC<MenuPropsType> = ({type,closeModal}) => {
    const navMenuHeaderState = [
        {itemHeading: "Home", link: "#home", id: 1,},
        {itemHeading: "About", link: "#about", id: 2},
        {itemHeading: "Tech Stack", link: "#techStack", id: 3},
        {itemHeading: "Projects", link: "#projects", id: 4},
        {itemHeading: "Contact", link: "#contact", id: 5}
    ];



    return (
        <>
            <Navigation menuState={navMenuHeaderState} type={type} closeModal={closeModal} />
            <ContactsGroup type={type} closeModal={closeModal}/>
        </>
    );
};

