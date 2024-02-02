import React from 'react';
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import {FlexContainer} from "../../../components/FlexContainer";
import {Icon} from "../../../components/icon/Icon";


export const MyTechStack = () => {
    return (
        <section>
            <GroupOfHeadingSection
                heading={'My Tech Stack'}
                description={'Technologies I’ve been working with recently'} size={"large"}/>
            <FlexContainer gap={'95px'}   wrap={"wrap"} justify={"center"}>
                <Icon iconId={'html'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'css'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'js'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'vsCode'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'react'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'redux'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'git'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'html'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'html'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'html'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                <Icon iconId={'html'} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>

            </FlexContainer>
        </section>
    );
};

