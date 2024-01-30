import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactsGroup} from "../../components/contacts/ContactsGroup";

type HeaderPropsType = {}

export const Header = (props: HeaderPropsType) => {
    return (
        <StyledHeader>
            <Logo/>
            <StyledNavigationBlock>
                <Menu/>
                <ContactsGroup/>
            </StyledNavigationBlock>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledNavigationBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 54px;
`


