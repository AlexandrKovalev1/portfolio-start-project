import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactsGroup} from "../../components/contacts/ContactsGroup";
import {BurgerMenu} from "./burgerMenu/BurgerMenu";
import {menuContactsState, navMenuHeaderState} from "../../state.js";
import {Container} from "../../components/container/Container";
import {FlexContainer} from "../../components/FlexContainer";

type HeaderPropsType = {};

export const Header = (props: HeaderPropsType) => {


    return (
        <StyledHeader>
            <Container width={"1220px"}>
                <FlexContainer align={"center"} justify={"space-between"}>
                    <Logo/>
                    <StyledNavigationBlock>
                        <Menu menuState={navMenuHeaderState} type={"header"}/>
                        <ContactsGroup menuState={menuContactsState} type={"header"}/>
                    </StyledNavigationBlock>
                    {/*<BurgerMenu/>*/}
                </FlexContainer>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #0000001A;
    background-color: #F9F9F980;
    z-index: 999999;
`;

const StyledNavigationBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 54px;

    @media (max-width: 990px) {
        nav {
            display: none;
        }

        div {
            display: none;
        }
    }

`;


