import React from 'react';
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import styled from "styled-components";
import {Button} from "../../../components/button/Button";


export const LetSWorkTogether = () => {
    return (
        <StyledSectionLetsWork>
            <StyledContentWrapper>
                <GroupOfHeadingSection heading={"Let’s work together"}
                                       description={"I’m available for freelance work. Have any projects in your mind? Just feel free to contact me"}
                                       size={"large"}/>
                <Button nameOfType={"Contact"} height={"60px"} width={"186px"} >Contact me</Button>
            </StyledContentWrapper>


        </StyledSectionLetsWork>
    );
};


const StyledSectionLetsWork = styled.section`

    background-color: #D6D9DD;
`;

const StyledContentWrapper = styled.div`
    max-width: 712px;
    width: 100%;
    min-height: 520px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;