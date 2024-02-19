import React from "react";
import {Styles} from "./NavigationItem_Styles";

type MenuItemPropsType = {
    itemHeading: string
    link: string
}
export const NavigationItem:React.FC<MenuItemPropsType> = ({link,itemHeading}) => {
    return (
        <li>
            <Styles.Link href={link}>{itemHeading}</Styles.Link>
        </li>
    );
};




