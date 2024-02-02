import React from 'react';
import styled from "styled-components";

type ProjectCardPropsType = {
    cover: string,
}
export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectWrapper>
            <StyledImg src={props.cover}/>
            <StyledCardContentWrapper>
                <h3></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis ipsum laudantium magnam mollitia, quibusdam recusandae rem sed! At dolores in neque odit officia quis ut vel? Blanditiis ratione, ut!</p>
                <span></span>
                <StyledLinksContainer>
                    <a href="#">,dsfdsfs</a>
                    <a href="#">zxcdsfdf</a>
                </StyledLinksContainer>
            </StyledCardContentWrapper>

        </StyledProjectWrapper>
    );
};

const StyledProjectWrapper = styled.div`
    position: relative;
    max-width: 375px;
    width: 100%;
    min-height: 570px;
    height: min-content;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 #00000033;
    overflow: hidden;

`;

const StyledImg = styled.img`
    object-fit: cover;
`;

const StyledCardContentWrapper = styled.div`
    min-height: 310px;
    padding: 28px;
    //background-color: purple;
`;

const StyledLinksContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    gap: 49px;
    position: absolute;
    bottom: 28px;
    left: 28px;
`