import React from 'react';
import {ContactsGroup} from "../../components/contacts/ContactsGroup";
import {Container} from "../../components/container/Container";
import { Styles } from './Footer_Styles';

export const Footer = () => {
    const menuContactsState = [
        {iconId: "github", viewBox: "0 0 88 88", href:"#", id: 1},
        {iconId: "instagram", viewBox: "0 0 32 32", href:"#", id: 2},
        {iconId: "telegram", viewBox: "0 0 32 35", href:"#", id: 3},
        {iconId: "whatsapp", viewBox: "0 0 32 32", href:"#", id: 4}
    ];

    return (
        <Styles.Footer>
            <Container width={"1274px"}>
                <Styles.FooterContentWrapper>
                    <small>© 2024 <b>Alexandr Kovalyov</b> with Love and Coffee. All rights reserved</small>
                    <ContactsGroup menuState={menuContactsState} type={"footer"}/>
                </Styles.FooterContentWrapper>
            </Container>
        </Styles.Footer>
    );
};


