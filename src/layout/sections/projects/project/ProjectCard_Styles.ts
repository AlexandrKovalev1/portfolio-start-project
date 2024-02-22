import styled, {css} from "styled-components";
import {LinkButton} from "../../../../components/linkButton/LinkButton";
import {theme} from "../../../../styles/Theme";


/* Custom Link*/

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;

    color: initial;
`;


/* Project Content*/

const ProjectContentWrapper = styled.div`
    padding: 28px 28px 0;
    flex-grow: 1;
`;

const ProjectHeading = styled.h3``;

const ProjectDescription = styled.p<{ full: boolean }>`
    margin: 17px 0 12px 0;
    max-height: 115px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;

    ${props => props.full && css<{ full: boolean }>`
        max-height: unset;
        overflow: visible;
        display: block;
    `};
`;

const TechStackWrapper = styled.div`
    display: flex;

    h4 {
        white-space: nowrap;
    }
`;


/* Project Card*/

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375px;
    width: 100%;
    min-height: 570px;
    height: min-content;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 #00000033;


`;

const Img = styled.img`
    width: 100%;
`;

const ImageWrapper = styled.div`
    position: relative;

    :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(250, 250, 250, 0.29);
        backdrop-filter: blur(4px);
        opacity: 0;
    }
;

    ${LinkButton} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;

    }

    :hover {
        :before {
            opacity: 1;
        }

        ${LinkButton} {
            opacity: 1;
        }
    }
;


    @media${theme.media.mobile} {
        :before {
            opacity: 1;
        }

        ${LinkButton} {
            opacity: 1;
        }
    }
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 48px;
    padding: 28px;
`;


export const Styles = {
    Link,
    ProjectContentWrapper,
    ProjectHeading,
    ProjectDescription,
    TechStackWrapper,
    ProjectWrapper,
    Img,
    ImageWrapper,
    LinksContainer
};