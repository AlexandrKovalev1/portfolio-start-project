import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type MenuItemPropsType = {
    itemHeading: string
    link: string
}
export const MenuItem = (props: MenuItemPropsType) => {
    return (
        <ListItem>
            <Link href={props.link}>{props.itemHeading}</Link>
        </ListItem>
    );
};




const ListItem = styled.li`
    position: relative;


`;

const Link = styled.a`
    color: ${theme.colors.primaryText};
    font-size: 16px;
    font-weight: 700;
`;