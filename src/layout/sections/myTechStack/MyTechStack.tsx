import React from "react";
import {GroupOfHeadingSection} from "../../../components/groupOfHeadingSection/GroupOfHeadingSection";
import {FlexContainer} from "../../../components/FlexContainer";
import {Icon} from "../../../components/icon/Icon";


export const MyTechStack = () => {

    const myStackState = [{id: "html", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: "css", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: "js", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: "vsCode", width: "120", height: "120", viewBox: "0 0 120 120"},
        {id: "react", width: "120", height: "120", viewBox: "-3 -9 120 120"},
        {id: "redux", width: "120", height: "120", viewBox: "-9 -10 120 120"},
        {id: "git", width: "120", height: "120", viewBox: "-7 -8 120 120"},
        {id: "iconGithub", width: "120", height: "120", viewBox: "-18 -20 120 120"},
        {id: "react", width: "120", height: "120", viewBox: "-3 -9 120 120"},
        {id: "react", width: "120", height: "120", viewBox: "-3 -9 120 120"},
        {id: "react", width: "120", height: "120", viewBox: "-3 -9 120 120"}

    ];

    const MyStacks = myStackState.map(item => <Icon
        iconId={item.id}
        width={item.width}
        height={item.height}
        viewBox={item.viewBox}
    />)

    return (
        <section>
            <GroupOfHeadingSection
                heading={"My Tech Stack"}
                description={"Technologies I’ve been working with recently"} size={"large"}/>
            <FlexContainer gap={"95px"} wrap={"wrap"} justify={"center"}>
                {MyStacks}
            </FlexContainer>
        </section>
    );
};

