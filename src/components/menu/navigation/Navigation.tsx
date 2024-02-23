import React from "react";
import {NavigationItem} from "./navigationItem/NavigationItem";
import {Styles} from "./Navigation_Styles";

type MenuPropsType = {
    menuState: Array<{
        itemHeading: string,
        link: string,
        id: number,

    }>,
    type: "desktop" | "burger",
    closeModal?:React.Dispatch<React.SetStateAction<boolean>>
};
export const Navigation:React.FC<MenuPropsType> = ({menuState,type,closeModal}) => {

    const menuItems = menuState.map(item =>
        <NavigationItem
            closeModal={closeModal}
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

