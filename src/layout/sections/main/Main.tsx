import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import styled from "styled-components";
import abstracts from '../../../assets/images/abstracts-sprite.svg';
import photo from '../../../assets/images/avatar.jpg'

export const Main = () => {
    return (
        <main>
            <FlexContainer align={'center'} justify={'space-between'}>
                <MainTitle>
                    <p>
                        Hi 👋,<br/>
                        My name is<br/>
                        Kovalev Alexandr
                    </p>
                    <h1> I am frontend developer</h1>
                </MainTitle>
                <BlockPhotoCard>
                    <Photo src={photo} alt={'photo'}/>
                    <StyledSvg width="628" height="628" viewBox="0 0 628 628" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={`${abstracts}#'darkAbstract'`}/>
                    </StyledSvg>
                </BlockPhotoCard>
            </FlexContainer>
        </main>
    );
};

const StyledSvg = styled.svg`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    
`

const MainTitle = styled.div``;

const BlockPhotoCard = styled.div`
position: relative;`

const Photo = styled.img`
    width: 349px;
    height: 349px;
    border: 9px solid transparent;
    background-image: linear-gradient(white, white), radial-gradient(circle at top , #E70FAA,#00C0FD);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 50%;
`;

