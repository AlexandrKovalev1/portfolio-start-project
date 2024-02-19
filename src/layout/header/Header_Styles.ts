import styled from "styled-components";
import {theme} from "../../styles/Theme";

const StyledHeader = styled.header`
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #0000001A;
    background-color: #F9F9F980;
    z-index: 999999;
`;

const StyledNavigationBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 54px;

    @media ${theme.media.largeDesc} {
        display: none;
    };

`;

export const Styles = {
    StyledHeader,
    StyledNavigationBlock
};