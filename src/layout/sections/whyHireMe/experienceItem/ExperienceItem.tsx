import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type ExperienceItemPropsType = {
    position: string
    companyName: string
    location: string
    employment: string
    dataFrom: string
    dataTo?: string

};
export const ExperienceItem = (props: ExperienceItemPropsType) => {

    const dateTo = props.dataTo ? props.dataTo : "until now";

    return (
        <ExperienceWrapper>
            <ExperienceGroup>
                <h3>{props.position}</h3>
                <CompanyInfoBlock>
                    <InfoItem IconId={"company"} text={props.companyName}/>
                    <InfoItem IconId={"location"} text={props.location}/>
                </CompanyInfoBlock>
            </ExperienceGroup>
            <ExperienceGroup>
                <StyledEmployment>{props.employment}</StyledEmployment>
                <InfoItem IconId={"data"} text={`${props.dataFrom} - ${dateTo}`}/>
            </ExperienceGroup>

        </ExperienceWrapper>
    );
};


const ExperienceWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 75px;
    width: 100%;
    
    :before {
        position:absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        border-bottom: 1px solid #2D2D2D;
    }
`;

const ExperienceGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    &+& {
        flex-shrink: 0;
        align-items: flex-end;
    }
`;

const CompanyInfoBlock = styled.div`
display: flex;
    justify-content: space-between;
    min-width: 200px;
    
`;

const StyledEmployment = styled.span`
    width: 84px;
    font-size: 9px;
    font-weight: 600;
    text-align: center;
    line-height: 24px;
    border-radius: 12px;
    color: #018C0F;
    background-color: #D7FFE0;
`;

type InfoItemPropsType = {
    IconId: string
    text: string
}
const InfoItem = (props: InfoItemPropsType) => {
    return (
        <div>
            <Icon iconId={props.IconId} width={"16px"} height={"12px"} viewBox={"0 0 16 12"}/>
            <span>{props.text}</span>
        </div>
    )
}