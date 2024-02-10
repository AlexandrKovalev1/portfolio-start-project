import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Main} from "./layout/sections/main/Main";
import {MyTechStack} from "./layout/sections/myTechStack/MyTechStack";
import {Projects} from "./layout/sections/projects/Projects";
import {LetSWorkTogether} from "./layout/sections/let’sWorkTogether/Let’sWorkTogether";
import {Footer} from "./layout/footer/Footer";
import {WhyHireMe} from "./layout/sections/whyHireMe/WhyHireMe";


function App() {
    return (
        <AppWrapperStyled>
            <Header/>
            <Main/>
            <WhyHireMe/>
            <MyTechStack/>
            <Projects/>
            <LetSWorkTogether/>
            <Footer/>
        </AppWrapperStyled>
    );
}


const AppWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    //max-width: 1920px;
    //width: 100%;
    //margin: 0 auto;
    //overflow: hidden;
`

export default App;
