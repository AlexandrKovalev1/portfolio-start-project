import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {CustomLink} from "./customLink/CustomLink";

type ProjectCardPropsType = {
    cover: string,
}
export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectWrapper>
            <StyledImg src={props.cover}/>
            <StyledCardContentWrapper>
                <h3></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis ipsum laudantium magnam
                    mollitia, quibusdam recusandae rem sed! At dolores in neque odit officia quis ut vel? Blanditiis
                    ratione, ut!</p>
                <span></span>
            </StyledCardContentWrapper>
            <StyledLinksContainer>
                <CustomLink href={"#"} type={"preview"}/>
                <CustomLink href={"#"} type={"code"}/>
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
    overflow: hidden;

`;

const StyledImg = styled.img`
    object-fit: cover;
`;

const StyledCardContentWrapper = styled.div`
    padding: 28px 28px 0;
    flex-grow: 1;
`;

const StyledLinksContainer = styled.div`
    display: flex;
    gap: 48px;
    padding: 28px;
    line-height: 26px;
`