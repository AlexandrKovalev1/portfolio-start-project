import React from "react";
import styled from "styled-components";

type ProjectContentPropsType = {
    heading: string,
    description?: string ,
    stack: string,
}

export const ProjectContent = (props: ProjectContentPropsType) => {
    return (
        <StyledProjectContentWrapper>
            <StyledProjectHeading>
                {props.heading}
            </StyledProjectHeading>
            <StyledProjectDescription>
                {props.description}
            </StyledProjectDescription>
            <StyledTechStackWrapper>
                <h4>
                    Tech stack:
                </h4>
                <span>{props.stack}</span>
            </StyledTechStackWrapper>
        </StyledProjectContentWrapper>
    );
};

const StyledProjectContentWrapper = styled.div`
    padding: 28px 28px 0;
    flex-grow: 1;
`;

const StyledProjectHeading = styled.h3`
`;


const StyledProjectDescription = styled.p`
    margin: 17px 0 12px 0;
`;

const StyledTechStackWrapper = styled.div`
display: flex;
`;