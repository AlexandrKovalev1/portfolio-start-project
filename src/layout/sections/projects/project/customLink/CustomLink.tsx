import React from "react";
import {Icon} from "../../../../../components/icon/Icon";
import {Styles} from "../ProjectCard_Styles";


type CustomLinkPropsType = {
    href: string,
    type: "preview" | "code",
};
export const CustomLink:React.FC<CustomLinkPropsType> = ({href,type}) => {
    let linkId, viewBox, headingLink;

    if (type === "preview") {
        linkId = "iconPreview";
        viewBox = "0 0 20 20";
        headingLink = "Live Preview";
    } else {
        linkId = "iconGithub";
        viewBox = "-2 -2 90 90";
        headingLink = "View Code";
    }


    return (
        <Styles.Link href={href}>
            <Icon iconId={linkId} width={"20px"} height={"20px"} viewBox={viewBox}/>
            {headingLink}
        </Styles.Link>
    );
};


