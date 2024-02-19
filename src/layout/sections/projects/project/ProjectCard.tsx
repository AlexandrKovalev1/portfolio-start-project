import React from "react";
import styled from "styled-components";
import {CustomLink} from "./customLink/CustomLink";
import {ProjectContent} from "./projectContent/ProjectContent";
import {LinkButton} from "../../../../components/linkButton/LinkButton";
import {theme} from "../../../../styles/Theme";

type ProjectCardPropsType = {
    cover: string,
    heading: string,
    description?: string,
    stack: string,
    links: {
        preview: string,
        code: string
    }
}
export const ProjectCard = (props: ProjectCardPropsType) => {

    return (
        <StyledProjectWrapper>

            <ImageWrapper>
                <StyledImg src={props.cover} alt={"ProjectCoverImg"}/>
                <LinkButton height={"60px"} width={"300px"} type={"viewProject"}>View project</LinkButton>
            </ImageWrapper>
            <ProjectContent heading={props.heading}
                            description={props.description}
                            stack={props.stack}/>
            <StyledLinksContainer>
                <CustomLink href={props.links.preview} type={"preview"}/>
                <CustomLink href={props.links.code} type={"code"}/>
            </StyledLinksContainer>

        </StyledProjectWrapper>
    );
};

const StyledProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375px;
    width: 100%;
    min-height: 570px;
    height: min-content;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 #00000033;


`;

const StyledImg = styled.img`
width:100%;
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
    };
    
    
    @media${theme.media.mobile} {
        :before {
            opacity: 1;
        }

        ${LinkButton} {
            opacity: 1;
        }
    }
`;


const StyledLinksContainer = styled.div`
    display: flex;
    gap: 48px;
    padding: 28px;
`;