import React from "react";
import styled from "styled-components";
import {CustomLink} from "./customLink/CustomLink";
import {ProjectContent} from "./projectContent/ProjectContent";

type ProjectCardPropsType = {
    cover: string,
    heading: string,
    description?: string ,
    stack: string,
    links: {
        preview: string,
        code: string
    }
}
export const ProjectCard = (props: ProjectCardPropsType) => {

    return (
        <StyledProjectWrapper>

            <StyledImg src={props.cover}/>
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
`;


const StyledLinksContainer = styled.div`
    display: flex;
    gap: 48px;
    padding: 28px;
`;