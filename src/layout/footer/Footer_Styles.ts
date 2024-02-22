import styled from "styled-components";

const Footer = styled.footer`
    position: relative;
    background-color: #D6D9DD;

    :before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        max-width: 1274px;
        border-top: 1px solid #848484;
        width: 100%;

    }
`;

const FooterContentWrapper = styled.div`
    min-height: 114px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Styles = {
    Footer,
    FooterContentWrapper
};