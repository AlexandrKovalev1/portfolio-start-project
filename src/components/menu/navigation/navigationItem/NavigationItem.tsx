import React from "react";
import {Styles} from "./NavigationItem_Styles";

type MenuItemPropsType = {
    itemHeading: string
    link: string
    closeModal?:React.Dispatch<React.SetStateAction<boolean>>
}
export const NavigationItem:React.FC<MenuItemPropsType> = ({link,itemHeading,closeModal}) => {


    return (
        <li role={"menuitem"} aria-label={`${itemHeading} page`} onClick={()=>{closeModal && closeModal(false)}}>
            <Styles.Link href={link} >{itemHeading}</Styles.Link>
        </li>
    );
};




