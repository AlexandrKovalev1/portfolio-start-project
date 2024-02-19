import React from "react";
import {Styles} from "./MenuItem_Styles";

type MenuItemPropsType = {
    itemHeading: string
    link: string
}
export const MenuItem:React.FC<MenuItemPropsType> = ({link,itemHeading}) => {
    return (
        <li>
            <Styles.Link href={link}>{itemHeading}</Styles.Link>
        </li>
    );
};




