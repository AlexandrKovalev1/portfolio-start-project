import React from 'react';
import styled, {css} from "styled-components";
import {Menu} from "../../../../components/menu/Menu";
import {ContactsGroup} from "../../../../components/contacts/ContactsGroup";
import {menuContactsState, navMenuHeaderState} from "../../../../state.js";

type  BurgerMenuBodyPropsType = {
    isOpen: boolean
}
export const BurgerMenuBody = (props: BurgerMenuBodyPropsType) => {

    return (
        <StyledMenuWrapper isOpen={props.isOpen}>
            <Menu menuState={navMenuHeaderState} type={"burger"}/>
            <ContactsGroup menuState={menuContactsState} type={"burger"}/>
        </StyledMenuWrapper>
    );
};


type StyledMenuWrapperPropsType = {
    isOpen: boolean
}

const StyledMenuWrapper = styled.div<StyledMenuWrapperPropsType>`
    display: none;


    ${props => props.isOpen && css<StyledMenuWrapperPropsType>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 150px;
        width: 100vw;
        min-height: 650px;
        background: white;
        position: absolute;
        right: -20px;
        top: 45px;
        z-index: 99;
        border-bottom: 2px solid black;


        @media (max-width: 770px) {
            min-height: 550px;
        }
    `};

    @media (max-height: 650px) {
        min-height: 100vh;
        gap:25px;
        
    };

    @media (max-height: 400px) {
        justify-content: flex-start;
    }
    

`;

