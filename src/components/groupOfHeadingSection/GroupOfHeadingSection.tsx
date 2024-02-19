import React from "react";

import styled, {css} from "styled-components";

type GroupOfHeadingSectionPropsType = {
    heading: string,
    description: string,

}
export const GroupOfHeadingSection = (props: GroupOfHeadingSectionPropsType) => {

    return (
        <StyledHeadingGroupWrapper >
            <Title>{props.heading}</Title>
            <Description>{props.description}</Description>
        </StyledHeadingGroupWrapper>
    );
};


const StyledHeadingGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;


`;


const Title = styled.h2`
    font-size: calc( (100vw - 360px)/(1920 - 360) * (48 - 40) + 40px);
    font-weight: 700;
`;

const Description = styled.span`
    margin: 15px 0 60px;
    font-size: 32px;
    font-weight: 400;

`;