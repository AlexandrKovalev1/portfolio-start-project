import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactsGroup} from "../../components/contacts/ContactsGroup";

type HeaderPropsType = {};

export const Header = (props: HeaderPropsType) => {

    const navMenuState = [
        {itemHeading:"Home",link:"",id:1},
        {itemHeading:"About",link:"",id:2},
        {itemHeading:"Tech Stack",link:"",id:3},
        {itemHeading:"Projects",link:"",id:4},
        {itemHeading:"Contact",link:"",id:5}
    ];

    const menuContactsState = [
        {iconId:"iconGithub",viewBox:"0 0 88 88",id:1},
        {iconId:"instagram",viewBox:"0 0 32 32",id:2},
        {iconId:"telegram",viewBox:"0 0 32 35",id:3},
        {iconId:"whatsapp",viewBox:"0 0 32 32",id:4}
    ];

    return (
        <StyledHeader>
            <Logo/>
            <StyledNavigationBlock>
                <Menu menuState={navMenuState}/>
                <ContactsGroup menuState={menuContactsState}/>
            </StyledNavigationBlock>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledNavigationBlock = styled.div`
    display: flex;
    gap: 54px;
`;


