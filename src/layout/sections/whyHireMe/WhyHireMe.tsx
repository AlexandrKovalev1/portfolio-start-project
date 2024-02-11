import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import {LinkButton} from "../../../components/linkButton/LinkButton";
import {ExperienceItem} from "./experienceItem/ExperienceItem";

export const WhyHireMe = () => {
    return (
        <StyledSectionWhy>
            <Container width={"1220px"}>
                <FlexContainer justify={"space-between"}>
                    <StyledPartitionWrapper>
                        <StyledPartitionHeading>Why Hire Me ?</StyledPartitionHeading>
                        <StyledPartitionText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere
                            aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse
                            risus.
                        </StyledPartitionText>

                        <StyledButtonsGroup>
                            <Button nameOfType={"HireMe"} width={"206px"} height={"56px"}>Hire Me</Button>
                            <LinkButton outlined href={"#"} width={"206px"} height={"56px"} download>Download
                                CV</LinkButton>
                        </StyledButtonsGroup>
                    </StyledPartitionWrapper>
                    <StyledPartitionWrapper>
                        <StyledPartitionHeading>Work Experience</StyledPartitionHeading>
                        <ExperienceItem position={"Web Developer"} companyName={"it-incubalor"} location={"Minsk"}
                                        employment={"Student"} dataFrom={"Jan 2024"}/>
                        <ExperienceItem position={"Web Developer"} companyName={"it-incubalor"} location={"Minsk"}
                                        employment={"Student"} dataFrom={"Jan 2024"}/>
                        <ExperienceItem
                            position={"Web Developer"} companyName={"it-incubalor"} location={"Minsk"}
                            employment={"Student"} dataFrom={"Jan 2024"}/>

                    </StyledPartitionWrapper>
                </FlexContainer>
            </Container>

        </StyledSectionWhy>
    );
};


const StyledSectionWhy = styled.section`
    background-color: #E5E9ED;

${FlexContainer} {
    @media (max-width: 950px) {
        flex-wrap: wrap;
        justify-content: center;
    }
}
`;


const StyledPartitionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    max-width: 535px;
    width: 100%;
    min-height: 350px;

`;

const StyledPartitionHeading = styled.h2`
    font-size: 48px;
    font-weight: 700;
`;

const StyledPartitionText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
`;

const StyledButtonsGroup = styled.div`
    display: flex;
    gap: 25px;
`;
