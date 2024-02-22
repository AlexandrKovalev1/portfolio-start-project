import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {Styles} from "./ExperienceItem_Styles";


type ExperienceItemPropsType = {
    position: string
    companyName: string
    location: string
    employment: string
    dataFrom: string
    dataTo?: string

};
export const ExperienceItem: React.FC<ExperienceItemPropsType> = ({
                                                                      dataTo,
                                                                      position,
                                                                      companyName,
                                                                      location,
                                                                      employment,
                                                                      dataFrom
                                                                  }) => {

    const dateTo = dataTo ? dataTo : "Until now";

    return (
        <Styles.ExperienceWrapper>
            <Styles.ExperienceGroup>
                <Styles.ExperienceHeading>{position}</Styles.ExperienceHeading>
                <Styles.CompanyInfoBlock>
                    <InfoItem IconId={"company"} text={companyName}/>
                    <InfoItem IconId={"location"} text={location}/>
                </Styles.CompanyInfoBlock>
            </Styles.ExperienceGroup>
            <Styles.ExperienceGroup>
                <Styles.Employment>{employment}</Styles.Employment>
                <InfoItem IconId={"data"} text={`${dataFrom} - ${dateTo}`}/>
            </Styles.ExperienceGroup>

        </Styles.ExperienceWrapper>
    );
};


type InfoItemPropsType = {
    IconId: string
    text: string
}
const InfoItem:React.FC<InfoItemPropsType> = ({IconId,text}) => {
    return (
        <div>
            <Icon iconId={IconId} width={"16px"} height={"12px"} viewBox={"0 0 16 12"}/>
            <span>{text}</span>
        </div>
    )
}