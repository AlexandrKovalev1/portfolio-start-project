import React from 'react';

import styled, {css} from "styled-components";

type GroupOfHeadingSectionPropsType = {
    heading: string,
    description: string,
    size: 'large' | 'medium' | 'mobile',
}
export const GroupOfHeadingSection = (props: GroupOfHeadingSectionPropsType) => {

    return (
        <StyledHeadingGroupWrapper size={props.size}>
            <h2>{props.heading}</h2>
            <span>{props.description}</span>
        </StyledHeadingGroupWrapper>
    );
};

type StyledHeadingGroupWrapperPropsType = {
    size: 'large' | 'medium' | 'mobile'
};

const StyledHeadingGroupWrapper = styled.div<StyledHeadingGroupWrapperPropsType>`
    display: flex;
    flex-direction: column;

    ${props => props.size === 'large' && css<StyledHeadingGroupWrapperPropsType>`
        align-items: center;

        h2 {
            font-size: 48px;
            font-weight: 700;
        }

        span {
            margin:49px 0 124px;
            font-size: 32px;
            font-weight: 400;
        }

    `};

    ${props => props.size === 'medium' && css<StyledHeadingGroupWrapperPropsType>`
        h2 {
            font-size: 42px;
        }

        span {
            margin:31px 0 198px;
            font-size: 20px;
        }

    `}


`

