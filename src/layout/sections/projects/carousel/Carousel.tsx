import React from 'react';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {ProjectCard, ProjectCardPropsType} from "../project/ProjectCard";
import "../../../../styles/carouselStyles.css";


export const Carousel: React.FC<{ projects: Array<ProjectCardPropsType> }> = ({projects}) => {

    const responsive = {
        0: {
            items: 1
        },
        850: {
            items: 2

        },
        1200: {
            items: 3,
            itemsFit: 'contain'
        },
    };

    const ProjectsItems = projects.map((item, index) =>
        <ProjectCard cover={item.cover}
                     heading={item.heading}
                     description={item.description}
                     stack={item.stack}
                     links={item.links}
                     key={index}/>);

    return (
        <AliceCarousel
            mouseTracking
            items={ProjectsItems}
            responsive={responsive}
        />
    );
};
