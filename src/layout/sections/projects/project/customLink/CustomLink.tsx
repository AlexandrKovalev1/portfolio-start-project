import React from "react";
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";


type CustomLinkPropsType = {
    href: string,
    type: "preview" | "code",
};
export const CustomLink = (props: CustomLinkPropsType) => {
    let linkId, viewBox, headingLink = "";

    if (props.type === "preview") {
        linkId = "iconPreview";
        viewBox = "0 0 20 20";
        headingLink = "Live Preview";
    } else {
        linkId = "iconGithub";
        viewBox = "-2 -2 90 90";
        headingLink = "View Code";
    }
    ;


    return (
        <StyledLink href={props.href}>
            <Icon iconId={linkId} width={"20px"} height={"20px"} viewBox={viewBox}/>
            <span>{headingLink}</span>
        </StyledLink>
    );
};

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;

    color: initial;
`;
