import styled from "styled-components";
import {FlexContainer} from "../../../components/flexContainer/FlexContainer";
import {theme} from "../../../styles/Theme";

const SectionWhy = styled.section`
    background-color: #E5E9ED;

${FlexContainer} {
    @media${theme.media.largeDesc} {
        flex-wrap: wrap;
        justify-content: center;
    }
}
`;

const PartitionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    max-width: 535px;
    width: 100%;
    min-height: 350px;

`;

const PartitionHeading = styled.h2`
    font-size: calc( (100vw - 360px)/(1920 - 360) * (48 - 40) + 40px);
    width: 100%;
    font-weight: 700;
    
    @media${theme.media.largeDesc} {
        text-align: center;
    }
`;

const PartitionText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
`;

const ButtonsGroup = styled.div`
    display: flex;
    width: 100%;
    gap: 25px;

    @media${theme.media.largeDesc} {
        justify-content: center;
        align-items: center;
    }
    
`

export  const Styles = {
    SectionWhy,
    PartitionWrapper,
    PartitionHeading,
    PartitionText,
    ButtonsGroup
};