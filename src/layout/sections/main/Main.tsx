import React from "react";
import {FlexContainer} from "../../../components/FlexContainer";
import styled, {css} from "styled-components";
import elipse from "../../../assets/images/Ellipse.svg";
import poligon from "../../../assets/images/Polygon.svg";
import smallEliple from "../../../assets/images/EllipseSmoll.svg";
import plus1 from "../../../assets/images/plus1.svg";
import plus2 from "../../../assets/images/plus2.svg";
import ava from "../../../assets/images/avaPng.png";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container width={"1220px"}>
                <FlexContainer align={"center"} justify={"space-between"}>
                    <StyledPreviewInfoWrapper>
                        <StyledHeading>Frontend devoloper</StyledHeading>
                        <StyledSpan>Hello I’m</StyledSpan>
                        <StyledSpan accent>Alexandr Kovalyov</StyledSpan>
                        <StyledTextAbout>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et,
                            et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                            ullamcorper tincidunt.
                        </StyledTextAbout>
                        <Button nameOfType={"Get"} height={"60px"} width={"215px"}>GET IN TOUCH</Button>
                    </StyledPreviewInfoWrapper>


                    <StyledPhoto src={ava} alt="photoCard"/>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.main`
    background-color: #F9F9F9;
    background-image: url(${elipse}),
    url(${elipse}),
    url(${elipse}),
    url(${poligon}),
    url(${poligon}),
    url(${smallEliple}),
    url(${smallEliple}),
    url(${smallEliple}),
    url(${plus1}),
    url(${plus2});

    background-position: bottom -60% right 120%,
    top 100% right 13%,
    right -30% top -120%,
    center left 60%,
    top 80% left 95%,
    top 85% left 60%,
    top 40% left 93%,
    top 35% left 55%,
    left 10% top 60%,
    left calc(10% - 5px) top 60%;

    background-repeat: no-repeat;
`;

const StyledPreviewInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const StyledHeading = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #B8B8B8;
`;

const StyledSpan = styled.span<{ accent?: boolean }>`

    font-size: 80px;
    font-weight: 700;
    line-height: 80px;
    letter-spacing: -0.05em;
    white-space: nowrap;

    ${props => props.accent && css<{ accent?: boolean }>`
        font-family: Arial, sans-serif;
        color: ${theme.colors.accent}
    `}


`;

const StyledTextAbout = styled.p`
    margin-bottom: 50px;
    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.025em;
    color: #6A6A6A;
`;

const StyledPhoto = styled.img`
    width: 100%;
    max-width: 830px;
    //transform: translate(150px);

`;
