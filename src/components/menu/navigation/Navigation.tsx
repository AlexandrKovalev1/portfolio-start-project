import React from "react";
import {NavigationItem} from "./navigationItem/NavigationItem";
import {Styles} from "./Navigation_Styles";

type MenuPropsType = {
    menuState: Array<{
        itemHeading: string,
        link: string,
        id: number,

    }>,
    type: "desktop" | "burger"
};
export const Navigation:React.FC<MenuPropsType> = ({menuState,type}) => {

    const menuItems = menuState.map(item =>
        <NavigationItem
            itemHeading={item.itemHeading}
            link={item.link}
            key={item.id}
        />);

    return (
        <Styles.StyledNav type={type}>
            <Styles.List role={"menu"}>
                {menuItems}
            </Styles.List>
        </Styles.StyledNav>
    );
};

