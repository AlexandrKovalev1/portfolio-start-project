import React from "react";
import {CustomLink} from "./customLink/CustomLink";
import {ProjectContent} from "./projectContent/ProjectContent";
import {LinkButton} from "../../../../components/linkButton/LinkButton";
import {Styles} from "./ProjectCard_Styles";

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
export const ProjectCard: React.FC<ProjectCardPropsType> = ({
                                                                cover,
                                                                heading,
                                                                description,
                                                                stack,
                                                                links
                                                            }) => {

    return (
        <Styles.ProjectWrapper>

            <Styles.ImageWrapper>
                <Styles.Img src={cover} alt={"ProjectCoverImg"}/>
                <LinkButton height={"60px"} width={"300px"} type={"viewProject"}>View project</LinkButton>
            </Styles.ImageWrapper>
            <ProjectContent heading={heading}
                            description={description}
                            stack={stack}/>
            <Styles.LinksContainer>
                <CustomLink href={links.preview} type={"preview"}/>
                <CustomLink href={links.code} type={"code"}/>
            </Styles.LinksContainer>

        </Styles.ProjectWrapper>
    );
};

