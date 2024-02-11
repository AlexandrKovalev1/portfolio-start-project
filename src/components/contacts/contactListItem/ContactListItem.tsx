import React from "react";
import {Icon} from "../../icon/Icon";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


type ContactListItemPropsType = {
    iconId:string,
    viewBox:string,
    href:string
}
export const ContactListItem = (props:ContactListItemPropsType) => {



    return (
        <ListItem>
            <Link href={props.href}>
                <Icon iconId={props.iconId} width={"30"} height={"30"} viewBox={props.viewBox}/>
            </Link>
        </ListItem>
    );
};

const ListItem = styled.li`

    :hover svg {
        fill: ${theme.colors.accent};
    };
`;

const Link = styled.a`
    
    svg {
        fill: ${theme.colors.primaryText};
    };
`;
