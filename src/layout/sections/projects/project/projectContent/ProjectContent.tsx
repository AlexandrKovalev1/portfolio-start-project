import React, {useState} from "react";
import styled, {css} from "styled-components";

type ProjectContentPropsType = {
    heading: string,
    description?: string,
    stack: string,
}

export const ProjectContent = (props: ProjectContentPropsType) => {

    const [fullText, setFull] = useState(false);

    return (
        <StyledProjectContentWrapper>
            <StyledProjectHeading>
                {props.heading}
            </StyledProjectHeading>
            <StyledProjectDescription full={fullText} onClick={() => {
                setFull(!fullText)
            }}>
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


const StyledProjectDescription = styled.p<{ full: boolean }>`
    margin: 17px 0 12px 0;
    max-height: 115px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;

    ${props => props.full && css<{ full: boolean }>`
        max-height: unset;
        overflow: visible;
        display: block;
    `};

`;

const StyledTechStackWrapper = styled.div`
    display: flex;
`;