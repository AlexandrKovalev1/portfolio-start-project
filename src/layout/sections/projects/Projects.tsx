import React from 'react';
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import {FlexContainer} from "../../../components/FlexContainer";
import {ProjectCard} from "./project/ProjectCard";
import coverImg from '../../../assets/images/projectCardCover.jpg';
const Projects = () => {
    return (
        <div>
            <GroupOfHeadingSection heading={"Projects"} description={"Things I’ve built so far"} size={'large'}/>

            <FlexContainer gap={"62px 34px"} wrap={"wrap"} justify={"center"}>
                <ProjectCard cover={coverImg}/>
                <ProjectCard cover={coverImg}/>
                <ProjectCard cover={coverImg}/>
                <ProjectCard cover={coverImg}/>
                <ProjectCard cover={coverImg}/>
            </FlexContainer>


        </div>
    );
};

export default Projects;