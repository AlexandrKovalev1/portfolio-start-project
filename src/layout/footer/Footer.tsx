import React from 'react';
import styled from "styled-components";
import {ContactsGroup} from "../../components/contacts/ContactsGroup";
import {Container} from "../../components/container/Container";

export const Footer = () => {
    const menuContactsState = [
        {iconId: "iconGithub", viewBox: "0 0 88 88", href:"#", id: 1},
        {iconId: "instagram", viewBox: "0 0 32 32", href:"#", id: 2},
        {iconId: "telegram", viewBox: "0 0 32 35", href:"#", id: 3},
        {iconId: "whatsapp", viewBox: "0 0 32 32", href:"#", id: 4}
    ];

    return (
        <StyledFooter>
            <Container width={"1274px"}>
                <StyledFooterContentWrapper>
                    <small>© 2024 <b>Alexandr Kovalyov</b> with Love and Coffee. All rights reserved</small>
                    <ContactsGroup menuState={menuContactsState} type={"footer"}/>
                </StyledFooterContentWrapper>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    position: relative;
    background-color: #D6D9DD;

    ::before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        max-width: 1274px;
        border-top: 1px solid #848484;
        width: 100%;

    }
`;

const StyledFooterContentWrapper = styled.div`
    min-height: 114px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;