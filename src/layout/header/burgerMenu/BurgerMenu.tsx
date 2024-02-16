import React, {useState} from 'react';

import styled, {css} from "styled-components";
import {BurgerMenuBody} from "./burgerMenuBody/BurgerMenuBody";
import {theme} from "../../../styles/Theme";

export const BurgerMenu = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <StyledBurgerMenuWrapper>
            <StyledBurgerButton isOpen={isOpen} onClick={() => {
                setOpen(!isOpen)
            }}>
                <span></span>
            </StyledBurgerButton>
            <BurgerMenuBody isOpen={isOpen}/>
        </StyledBurgerMenuWrapper>
    );
};

const StyledBurgerMenuWrapper = styled.div`
    display: none;
    
    @media ${theme.media.largeDesc} {
        display: block;
    };
`;

const StyledBurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -140px;
    right: -290px;
    width: 260px;
    height: 260px;
    transform: translateX(-50%);
    z-index: 1099999;
    cursor: pointer;


    span {
        display: block;
        width: 36px;
        height: 3px;
        background-color: ${theme.colors.icons};
        position: absolute;
        left: 40px;
        bottom: 50px;

        :before {
            content: "";
            display: block;
            width: 36px;
            height: 3px;
            background-color: ${theme.colors.icons};
            position: absolute;
            transform: translateY(-10px);
        }
    ;

        :after {
            content: "";
            display: block;
            width: 24px;
            height: 3px;
            background-color: ${theme.colors.icons};
            position: absolute;
            right: 0;
            transform: translateY(10px);
        }
    ;
    }
;

    ${props => props.isOpen && css`
        span {
            background-color: rgba(225, 225, 225, 0);

            :before {
                height: 4px;
                transform: rotate(45deg) translateY(0);
            }
        ;

            :after {
                width: 36px;
                height: 4px;
                transform: rotate(-45deg) translateY(0);
            }
        ;

            :hover {
                :before, :after {
                    background-color: red;
                }
            }
        }


    `}
`;