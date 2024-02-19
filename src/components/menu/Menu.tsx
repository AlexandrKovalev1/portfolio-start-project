import React from "react";
import {MenuItem} from "./menuItem/MenuItem";
import {Styles} from "./Menu_Styles";

type MenuPropsType = {
    menuState: Array<{
        itemHeading: string,
        link: string,
        id: number,

    }>,
    type: "header" | "burger"
};
export const Menu:React.FC<MenuPropsType> = ({menuState,type}) => {

    const menuItems = menuState.map(item =>
        <MenuItem
            itemHeading={item.itemHeading}
            link={item.link}
            key={item.id}
        />);

    return (
        <Styles.StyledNav type={type}>
            <Styles.List>
                {menuItems}
            </Styles.List>
        </Styles.StyledNav>
    );
};

