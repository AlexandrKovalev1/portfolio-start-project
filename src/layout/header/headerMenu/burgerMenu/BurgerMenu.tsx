import React, {useState} from 'react';

import {BurgerMenuBody} from "./burgerMenuBody/BurgerMenuBody";
import { Styles } from './BurgerMenu_Styles';

export const BurgerMenu:React.FC = () => {

    const [isOpen, setOpen] = useState(false);

    let ariaLabel = isOpen?"close":"open burger menu"
    return (
        <Styles.BurgerMenuWrapper>
            <Styles.BurgerButton isOpen={isOpen} onClick={() => {
                setOpen(!isOpen)
            }} aria-label={ariaLabel}>
                <span></span>
            </Styles.BurgerButton>
            <BurgerMenuBody isOpen={isOpen} closeMenu={setOpen}/>
        </Styles.BurgerMenuWrapper>
    );
};

