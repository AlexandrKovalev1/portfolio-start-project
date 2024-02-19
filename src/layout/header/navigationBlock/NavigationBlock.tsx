import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {menuContactsState, navMenuHeaderState} from "../../../state";
import {ContactsGroup} from "../../../components/contacts/ContactsGroup";
import {BurgerMenu} from "../burgerMenu/BurgerMenu";
import {FlexContainer} from "../../../components/FlexContainer";
import { Styles } from './NavigationBlock_Styles';

export const NavigationBlock = () => {
    return (
        <Styles.StyledNavigationBlock>
            <FlexContainer align={"center"} justify={"space-between"}>
                <Logo/>
                <Styles.StyledMenuBlock>
                    <Menu menuState={navMenuHeaderState} type={"header"}/>
                    <ContactsGroup menuState={menuContactsState} type={"header"}/>
                </Styles.StyledMenuBlock>
                <BurgerMenu/>
            </FlexContainer>
        </Styles.StyledNavigationBlock>
    );
};

