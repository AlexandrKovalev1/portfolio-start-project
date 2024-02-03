import React from "react";
import styled from "styled-components";
import {MenuItem} from "./menuItem/MenuItem";

type MenuPropsType = {
    menuState: Array<{
        itemHeading: string,
        link: string,
        id: number
    }>
};
export const Menu = (props: MenuPropsType) => {

    const menuItems = props.menuState.map(item =>
        <MenuItem
            itemHeading={item.itemHeading}
            link={item.link}
            key={item.id}
        />);

    return (
        <StyledNav>
            <ul>
                {menuItems}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 54px;
    }

`;