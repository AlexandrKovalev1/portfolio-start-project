import React, {useState} from 'react';

import {BurgerMenuBody} from "./burgerMenuBody/BurgerMenuBody";
import { Styles } from './BurgerMenu_Styles';

export const BurgerMenu:React.FC = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <Styles.BurgerMenuWrapper>
            <Styles.BurgerButton isOpen={isOpen} onClick={() => {
                setOpen(!isOpen)
            }}>
                <span></span>
            </Styles.BurgerButton>
            <BurgerMenuBody isOpen={isOpen}/>
        </Styles.BurgerMenuWrapper>
    );
};

