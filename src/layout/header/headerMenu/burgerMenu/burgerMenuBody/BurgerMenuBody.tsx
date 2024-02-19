import React from 'react';
import {FlexContainer} from "../../../../../components/flexContainer/FlexContainer";
import {Menu} from "../../../../../components/menu/Menu";
import {Styles} from "../BurgerMenu_Styles";

type  BurgerMenuBodyPropsType = {
    isOpen: boolean
};
export const BurgerMenuBody: React.FC<BurgerMenuBodyPropsType> = ({isOpen}) => {

    return (
        <Styles.MenuBody isOpen={isOpen}>
            <FlexContainer direction={"column"} justify={"space-evenly"} gap={"80px"} align={"center"}>
                <Menu type={"burger"}/>
            </FlexContainer>
        </Styles.MenuBody>
    );
};




