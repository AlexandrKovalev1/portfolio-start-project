import styled from "styled-components";

const StyledNavigationBlock = styled.div`
    position: absolute;
    height: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1;

    background-color: rgba(249, 249, 249, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    
`;


const StyledMenuBlock = styled.div`
    display: flex;
    gap: 54px;
    z-index: 101;
`;

export const Styles = {
    StyledNavigationBlock,
    StyledMenuBlock,
};