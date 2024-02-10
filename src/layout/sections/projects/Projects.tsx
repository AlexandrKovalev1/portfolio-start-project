import React from "react";
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import {FlexContainer} from "../../../components/FlexContainer";
import {ProjectCard} from "./project/ProjectCard";
import coverImg from "../../../assets/images/projectCardCover.jpg";
import {Container} from "../../../components/container/Container";
import styled from "styled-components";

export const Projects = () => {

    const ProjectsState = [{
        id: 1,
        cover: coverImg,
        heading: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        links: {preview: "#", code: "#"}
    },
        {
            id: 2,
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        },
        {
            id: 3,
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        },
        {
            id: 4,
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        },
        {
            id: 5,
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        }];

    const ProjectsItems = ProjectsState.map(item =>
        <ProjectCard cover={item.cover}
                     heading={item.heading}
                     description={item.description}
                     stack={item.stack}
                     links={item.links}
                     key={item.id}/>)

    return (
        <SectionProject>
            <Container width={"1220px"}>
                <GroupOfHeadingSection heading={"Projects"} description={"Things I’ve built so far"} size={"large"}/>

                <FlexContainer gap={"62px 34px"} wrap={"wrap"} justify={"center"}>
                    {ProjectsItems}
                </FlexContainer>
            </Container>


        </SectionProject>
    );
};


const SectionProject = styled.section`
padding: 150px 0;
`;