import styled, {css} from "styled-components";
import elipseBg from "../../../assets/images/Ellipse.svg";
import poligonBg from "../../../assets/images/Polygon.svg";
import smallElipse from "../../../assets/images/EllipseSmoll.svg";
import plus1 from "../../../assets/images/plus1.svg";
import plus2 from "../../../assets/images/plus2.svg";
import {theme} from "../../../styles/Theme";

const Main = styled.main`
    max-height: 100vh;
    overflow-x: hidden;
    background-color: #F9F9F9;
    background-image: url(${elipseBg}),
    url(${elipseBg}),
    url(${elipseBg}),
    url(${poligonBg}),
    url(${poligonBg}),
    url(${smallElipse}),
    url(${smallElipse}),
    url(${smallElipse}),
    url(${plus1}),
    url(${plus2});

    background-position: bottom -163px left -271px,
    top 44vh left 52vw,
    right -30% top -322px,
    center left 53%,
    top 80% left 95%,
    top 85% left 41%,
    top 40% left 93%,
    top 35% left 55%,
    left 9.8% top 60%,
    left calc(10% - 5px) top 60%;

    background-repeat: no-repeat;

    @media${theme.media.largeDesc} {
        max-height: unset;

        background-position: bottom -369px left -290px,
        top 293px left 47vw,
        right -326px top -318px,
        center left 37%,
        top 80% left 5%,
        top 94% left 38%,
        top 40% left 47%,
        top 23% left 14%,
        left 9.8% top 60%,
        left calc(10% - 5px) top 60%;

        background-size: 50vw, 50vw, 50vw, 16px, 16px, 16px, 16px, 16px, 8px,16px, 16px;
    };

    @media${theme.media.tablet} {
        background-position: bottom -132px left -132px,
        top 100px left 46vw,
        right -160px top -129px,
        center left 37%,
        top 80% left 5%,
        top 85% left 38%,
        top 40% left 47%,
        top 23% left 14%,
        left 9.8% top 60%,
        left calc(10% - 5px) top 60%;

        background-size: 36vw, 36vw, 36vw, 16px, 16px, 16px, 16px, 16px,8px,16px, 16px;
    };

    @media${theme.media.mobile} {
        background-position: bottom -179px left -132px,
        top 100px left 41vw,
        right -197px top -157px,
        center left 33%,
        top 75% left 5%,
        top 89% left 38%,
        top 40% left 41%,
        top 23% left 14%;

        background-size: 49vw, 49vw, 49vw, 16px, 16px, 16px, 16px, 16px, 8px,16px, 16px;
    };
    

`;

const GridBox = styled.div`
    display: grid;
    grid-auto-columns: minmax(100px, auto);
    grid-auto-rows: auto;

    @media${theme.media.tablet} {
        gap: 30px;
    };

`;

const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    align-self: flex-end;

    @media${theme.media.largeDesc} {
        grid-area: 1/1/2/2;
        margin: 0;
        align-self: center;
    };

    @media${theme.media.tablet} {
        grid-area: 1/1/2/2;
        align-self: flex-end;
    }

    @media${theme.media.mobile} {
        grid-area: 2/1/3/2;
    };

`;

const DescriptionBlock = styled.div`
    @media${theme.media.largeDesc} {
        grid-area: 3/1/4/3;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-bottom: 30px;
    };

    @media${theme.media.tablet} {
        grid-area: 3/1/4/3;
        align-items: center;
    }

    @media${theme.media.mobile} {
        grid-area: 3/1/4/2;

    };
    
`;


const Heading = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #B8B8B8;
    
    p{
        display: none;
    }
`;

const StyledSpan = styled.span<{ accent?: boolean }>`
    font-size: calc((100vw - 360px) / (1920 - 360) * (70 - 30) + 30px);

    font-weight: 700;
    line-height: 70px;
    letter-spacing: -0.05em;
    white-space: nowrap;

    ${props => props.accent && css<{ accent?: boolean }>`
        font-family: Arial, sans-serif;
        color: ${theme.colors.accent};

        @media${theme.media.tablet} {
            white-space: pre-wrap;
            line-height: 30px;
        };
    `}


`;

const TextAbout = styled.p`
    margin-bottom: 50px;
    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.025em;
    color: #6A6A6A;
`;

const Photo = styled.img`
    transform: translateX(-200px);
    height: 100vh;
    grid-area: 1/2/3/3;


    @media${theme.media.largeDesc} {
        max-height: 800px;
        height: 100%;
        grid-area: 1/2/2/3;
        filter: drop-shadow(10px -10px 1px #B8B8B8);
        transform: translateX(-140px);
    };

    @media${theme.media.tablet} {
        max-height: 400px;
        grid-area: 1/2/2/3;
        transform: translateX(-80px);
        border-bottom-right-radius: 150px;
        border-bottom-left-radius: 150px;
    }


    @media${theme.media.mobile} {
        max-height: 400px;
        grid-area: 1/1/2/2;
        transform: translateX(50px);
        justify-self: flex-end;
    };
    
`;

export const Styles = {
    Main,
    GridBox,
    TitleBlock,
    DescriptionBlock,
    Heading,
    StyledSpan,
    TextAbout,
    Photo,
};