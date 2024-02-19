import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/flexContainer/FlexContainer";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import {LinkButton} from "../../../components/linkButton/LinkButton";
import {ExperienceItem} from "./experienceItem/ExperienceItem";
import {theme} from "../../../styles/Theme";

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
                            <Button nameOfType={"HireMe"} width={"206px"} height={"56px"} >Hire Me</Button>
                            <LinkButton type={"outlined"} href={"#"} width={"206px"} height={"56px"} download>Download
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
    @media${theme.media.largeDesc} {
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
    font-size: calc( (100vw - 360px)/(1920 - 360) * (48 - 40) + 40px);
    width: 100%;
    font-weight: 700;
    
    @media${theme.media.largeDesc} {
        text-align: center;
    }
`;

const StyledPartitionText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
`;

const StyledButtonsGroup = styled.div`
    display: flex;
    width: 100%;
    gap: 25px;

    @media${theme.media.largeDesc} {
        justify-content: center;
        align-items: center;
    }
    
`;
