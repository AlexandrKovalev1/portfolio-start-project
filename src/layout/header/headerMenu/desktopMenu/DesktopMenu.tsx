import React from 'react';
import {Styles} from './DesktopMenu_Styles';
import {Menu} from "../../../../components/menu/Menu";

export const DesktopMenu = () => {
    return (
        <Styles.DesktopMenu>
            <Menu type={"desktop"}/>
        </Styles.DesktopMenu>
    );
};

