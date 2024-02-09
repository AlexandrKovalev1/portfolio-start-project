import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {menuContactsState, navMenuHeaderState} from "../../../state";
import {ContactsGroup} from "../../../components/contacts/ContactsGroup";
import {BurgerMenu} from "../burgerMenu/BurgerMenu";
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";

export const NavigationBlock = () => {
    return (
        <StyledNavigationBlock>
            <FlexContainer align={"center"} justify={"space-between"}>
                <Logo/>
                <StyledMenuBlock>
                    <Menu menuState={navMenuHeaderState} type={"header"}/>
                    <ContactsGroup menuState={menuContactsState} type={"header"}/>
                </StyledMenuBlock>
                <BurgerMenu/>
            </FlexContainer>
        </StyledNavigationBlock>
    );
};

const StyledNavigationBlock = styled.div`
    position: absolute;
    height: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;

    background-color: rgba(249, 249, 249, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
    @media (max-width: 990px) {
        height: 70px;
    }
`;


const StyledMenuBlock = styled.div`
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