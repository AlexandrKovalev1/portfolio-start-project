import React from 'react';
import {Menu} from "../../../../components/menu/Menu";
import {ContactsGroup} from "../../../../components/contacts/ContactsGroup";
import {menuContactsState, navMenuHeaderState} from "../../../../state";
import {FlexContainer} from "../../../../components/FlexContainer";
import {Styles} from "./BurgerMenuBody_Styles";

type  BurgerMenuBodyPropsType = {
    isOpen: boolean
};
export const BurgerMenuBody:React.FC<BurgerMenuBodyPropsType> = ({isOpen}) => {

    return (
        <Styles.StyledMenuWrapper isOpen={isOpen}>
            <FlexContainer direction={"column"} justify={"space-around"} gap={"80px"} align={"center"}>
                <Menu menuState={navMenuHeaderState} type={"burger"}/>
                <ContactsGroup menuState={menuContactsState} type={"burger"}/>
            </FlexContainer>
        </Styles.StyledMenuWrapper>
    );
};




