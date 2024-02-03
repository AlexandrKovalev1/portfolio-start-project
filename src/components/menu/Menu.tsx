import React from "react";
import styled, {css} from "styled-components";
import {MenuItem} from "./menuItem/MenuItem";

type MenuPropsType = {
    menuState: Array<{
        itemHeading: string,
        link: string,
        id: number,

    }>,
    type: "header" | "burger" | "footer"
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
    type: "header" | "burger" | "footer"
};

const StyledNav = styled.nav<StyledNavPropsType>`
    ul {
        display: flex;
        list-style: none;
    };

    ${props => props.type === "header" && css<StyledNavPropsType>`
        ul {
            gap: 54px;
        };

    `};

    ${props => props.type === "burger" && css<StyledNavPropsType>`
        ul {
            flex-direction: column;
            align-items: center;
            gap:20px;
        };


        @media (max-height: 650px) {
            ul{
                flex-shrink: 10;
            }
        }
    
    `};

    ${props => props.type === "footer" && css<StyledNavPropsType>``};



`;