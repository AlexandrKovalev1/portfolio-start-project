import styled, {css} from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer";

const StyledMenuWrapper = styled.div<{ isOpen: boolean }>`
    display: none;
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999999;
    background-color: #E5E9ED;

    ${props => props.isOpen && css`
        display: block;
    `};

    @media screen and (max-height: 650px) and (orientation: landscape) {
        ${FlexContainer} {
            gap: 0;
        }
    }
`;

export const Styles = {
    StyledMenuWrapper,
}