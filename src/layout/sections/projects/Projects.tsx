import React from "react";
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import coverImg from "../../../assets/images/projectCardCover.jpg";
import {Container} from "../../../components/container/Container";
import styled from "styled-components";
import {Carousel} from "./carousel/Carousel";


export const Projects = () => {

    const ProjectsState = [{
        cover: coverImg,
        heading: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        links: {preview: "#", code: "#"}
    },
        {
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        },
        {
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        },
        {
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        },
        {
            cover: coverImg,
            heading: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JavaScript, SASS, React",
            links: {preview: "#", code: "#"}
        }];


//         <GridBox>
//         {ProjectsItems}
// </GridBox>

    return (
        <SectionProject>
            <Container width={"1220px"}>
                <GroupOfHeadingSection heading={"Projects"} description={"Things I’ve built so far"}/>
                <Carousel projects={ProjectsState}/>
            </Container>
        </SectionProject>
    );
};

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(344px, auto));
    grid-auto-rows: auto;
    justify-content: center;
    gap: 62px 34px;

`;


const SectionProject = styled.section`
`;