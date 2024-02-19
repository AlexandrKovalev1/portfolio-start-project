import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ContactsGroup} from "../../components/contacts/ContactsGroup";
import {menuContactsState, navMenuHeaderState} from "../../state";
import {Container} from "../../components/container/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {BurgerMenu} from "./burgerMenu/BurgerMenu";
import {Styles} from "./Header_Styles";

type HeaderPropsType = {};

export const Header:React.FC<HeaderPropsType> = () => {


    return (
        <Styles.StyledHeader>
            <Container width={"1220px"}>
                <FlexContainer align={"center"} justify={"space-between"}>
                    <Logo/>
                    <Styles.StyledNavigationBlock>
                        <Menu menuState={navMenuHeaderState} type={"header"}/>
                        <ContactsGroup menuState={menuContactsState} type={"header"}/>
                    </Styles.StyledNavigationBlock>
                    <BurgerMenu/>
                </FlexContainer>
            </Container>

        </Styles.StyledHeader>
    );
};




