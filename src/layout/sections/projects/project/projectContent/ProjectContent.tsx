import React, {useState} from "react";
import {Styles} from "../ProjectCard_Styles";

type ProjectContentPropsType = {
    heading: string,
    description?: string,
    stack: string,
}

export const ProjectContent: React.FC<ProjectContentPropsType> = ({
                                                                      heading,
                                                                      description,
                                                                      stack
                                                                  }) => {

    const [fullText, setFull] = useState(false);

    return (
        <Styles.ProjectContentWrapper>
            <Styles.ProjectHeading>
                {heading}
            </Styles.ProjectHeading>
            <Styles.ProjectDescription full={fullText} onClick={() => {
                setFull(!fullText)
            }}>
                {description}
            </Styles.ProjectDescription>
            <Styles.TechStackWrapper>
                <h4>
                    Tech stack:
                </h4>
                <span>{stack}</span>
            </Styles.TechStackWrapper>
        </Styles.ProjectContentWrapper>
    );
};

