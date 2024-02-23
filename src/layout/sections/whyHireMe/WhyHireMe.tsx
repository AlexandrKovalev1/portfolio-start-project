import React from 'react';
import {FlexContainer} from "../../../components/flexContainer/FlexContainer";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import {LinkButton} from "../../../components/linkButton/LinkButton";
import {ExperienceItem} from "./experienceItem/ExperienceItem";
import { Styles } from './WhyHireMe_Styles';

export const WhyHireMe:React.FC = () => {
    return (
        <Styles.SectionWhy id={"about"}>
            <Container width={"1220px"}>
                <FlexContainer justify={"space-between"}>
                    <Styles.PartitionWrapper>
                        <Styles.PartitionHeading>Why Hire Me ?</Styles.PartitionHeading>
                        <Styles.PartitionText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapib eu placerat at nisl posuere
                            aliquet amet pharetra malesuada. Spendisse nisl ac at tortor. Sit faucibus suspendisse
                            risus.
                        </Styles.PartitionText>

                        <Styles.ButtonsGroup>
                            <Button nameOfType={"HireMe"} width={"206px"} height={"56px"} >Hire Me</Button>
                            <LinkButton type={"outlined"} href={"#"} width={"206px"} height={"56px"} download>Download
                                CV</LinkButton>
                        </Styles.ButtonsGroup>
                    </Styles.PartitionWrapper>
                    <Styles.PartitionWrapper>
                        <Styles.PartitionHeading>Work Experience</Styles.PartitionHeading>
                        <ExperienceItem position={"Web Developer"} companyName={"it-incubalor"} location={"Minsk"}
                                        employment={"Student"} dataFrom={"Jan 2024"}/>
                        <ExperienceItem position={"Web Developer"} companyName={"it-incubalor"} location={"Minsk"}
                                        employment={"Student"} dataFrom={"Jan 2024"}/>
                        <ExperienceItem
                            position={"Web Developer"} companyName={"it-incubalor"} location={"Minsk"}
                            employment={"Student"} dataFrom={"Jan 2024"}/>

                    </Styles.PartitionWrapper>
                </FlexContainer>
            </Container>

        </Styles.SectionWhy>
    );
};



