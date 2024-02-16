import React from "react";
import styled, {css} from "styled-components";
import {MenuItem} from "./menuItem/MenuItem";

type MenuPropsType = {
    menuState: Array<{
        itemHeading: string,
        link: string,
        id: number,

    }>,
    type: "header" | "burger"
};
export const Menu = (props: MenuPropsType) => {

    const menuItems = props.menuState.map(item =>
        <MenuItem
            itemHeading={item.itemHeading}
            link={item.link}
            key={item.id}
        />);

    return (
        <StyledNav type={props.type}>
            <ul>
                {menuItems}
            </ul>
        </StyledNav>
    );
};

type StyledNavPropsType = {
    type: "header" | "burger"
};

const StyledNav = styled.nav<StyledNavPropsType>`
    ul {
        display: flex;
        align-items: center;
        gap: 54px;
    };

    ${props => props.type === "burger" && css<StyledNavPropsType>`
        ul {
            flex-direction: column;
            justify-content: center;
            gap:20px;
            font-size: calc( (100vw - 360px)/(992 - 360) * (60 - 30) + 30px);
      
        };
    
    `};
`;