import React from "react";
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import {FlexContainer} from "../../../components/flexContainer/FlexContainer";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import { Bounce } from "react-awesome-reveal";


export const MyTechStack:React.FC = () => {

    const myStackState = [{id: 0, idIcon: "html", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: 1, idIcon: "css", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: 2, idIcon: "js", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: 3, idIcon: "webStorm", width: "120", height: "120", viewBox: "23 18 80 92"},
        {id: 4, idIcon: "react", width: "120", height: "120", viewBox: "-3 -9 120 120"},
        {id: 5, idIcon: "redux", width: "120", height: "120", viewBox: "-9 -10 120 120"},
        {id: 6, idIcon: "git", width: "120", height: "120", viewBox: "-7 -8 120 120"},
        {id: 7, idIcon: "github", width: "120", height: "120", viewBox: "-18 -20 120 120"},
        {id: 8, idIcon: "styled", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: 9, idIcon: "vsCode", width: "120", height: "120", viewBox: "0 0 120 120"},

    ];

    const MyStacks = myStackState.map(item => <Bounce cascade={true} duration={2100} delay={300} >
        <Icon
        iconId={item.idIcon}
        width={item.width}
        height={item.height}
        viewBox={item.viewBox}
        key={item.id}
    />
        </Bounce>)

    return (
        <StyledSectionMyStack id={"techStack"}>
            <Container width={"1220px"}>
                <GroupOfHeadingSection
                    heading={"My Tech Stack"}
                    description={"Technologies I’ve been working with recently"} />
                <FlexContainer gap={"95px"} wrap={"wrap"} justify={"center"}>
                    {MyStacks}
                </FlexContainer>
            </Container>
        </StyledSectionMyStack>
    );
};


const StyledSectionMyStack = styled.section`
    
    border-bottom: 1px solid #0000001A;
`;