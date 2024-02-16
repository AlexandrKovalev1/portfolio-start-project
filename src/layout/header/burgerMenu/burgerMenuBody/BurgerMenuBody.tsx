import React from 'react';
import styled, {css} from "styled-components";
import {Menu} from "../../../../components/menu/Menu";
import {ContactsGroup} from "../../../../components/contacts/ContactsGroup";
import {menuContactsState, navMenuHeaderState} from "../../../../state";
import {FlexContainer} from "../../../../components/FlexContainer";

type  BurgerMenuBodyPropsType = {
    isOpen: boolean
};
export const BurgerMenuBody = (props: BurgerMenuBodyPropsType) => {

    return (
        <StyledMenuWrapper isOpen={props.isOpen}>
            <FlexContainer direction={"column"} justify={"center"} gap={"80px"} align={"center"}>
                <Menu menuState={navMenuHeaderState} type={"burger"}/>
                <ContactsGroup menuState={menuContactsState} type={"burger"}/>
            </FlexContainer>
        </StyledMenuWrapper>
    );
};


const StyledMenuWrapper = styled.div<{ isOpen: boolean }>`
    display: none;
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999999;
    background-color: #E5E9ED;

    ${props => props.isOpen && css`
        display: block;
    `}
`;

