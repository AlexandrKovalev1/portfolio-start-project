import React from "react";

type MenuItemPropsType = {
    itemHeading:string
    link:string
}
export const MenuItem = (props:MenuItemPropsType) => {
    return (
        <li>
            <a href={props.link}>{props.itemHeading}</a>
        </li>
    );
};

