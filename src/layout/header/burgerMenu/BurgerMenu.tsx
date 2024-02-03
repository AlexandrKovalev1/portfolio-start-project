import React, {useState} from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {BurgerMenuBody} from "./burgerMenuBody/BurgerMenuBody";

export const BurgerMenu = () => {


    const [openMenu, setOpen] = useState<boolean>(false);


    return (
        <StyledBurgerMenuWrapper>
            <StyledBurgerButton onClick={()=>{setOpen(!openMenu)}}>
                <Icon iconId={"burgerIcon"} width={"36"} height={"20"} viewBox={"0 0 36 20"}/>
            </StyledBurgerButton>
            <BurgerMenuBody isOpen={openMenu}/>
        </StyledBurgerMenuWrapper>
    );
};

const StyledBurgerMenuWrapper = styled.div`
    display: none;
    margin-right: 20px;
    position: relative;


    svg {
        fill: #000000;
    }

    :hover svg {
        fill: #666666;
        cursor: pointer;

    }

    @media (max-width: 990px) {
        display: block;
    }
    
`;

const StyledBurgerButton = styled.button`
    border: none;
    background: transparent;
`;