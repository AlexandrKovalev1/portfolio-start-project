import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactsGroup} from "../../components/contacts/ContactsGroup";
import {BurgerMenu} from "./burgerMenu/BurgerMenu";
import {menuContactsState, navMenuHeaderState} from "../../state.js";

type HeaderPropsType = {};

export const Header = (props: HeaderPropsType) => {


    return (
        <StyledHeader>
            <Logo/>
            <StyledNavigationBlock>
                <Menu menuState={navMenuHeaderState} type={"header"}/>
                <ContactsGroup menuState={menuContactsState} type={"header"}/>
            </StyledNavigationBlock>
            <BurgerMenu/>
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
    z-index: 101;

    @media (max-width: 990px) {
        nav {
            display: none;
        }

        div {
            display: none;
        }
    }

`;


