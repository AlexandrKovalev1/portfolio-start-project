import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Main} from "./layout/sections/main/Main";
import {MyTechStack} from "./layout/sections/myTechStack/MyTechStack";
import Projects from "./layout/sections/projects/Projects";


function App() {
    return (
        <AppWrapperStyled>
            <Header/>
            <Main/>
            <MyTechStack/>
            <Projects/>
        </AppWrapperStyled>
    );
}


const AppWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    max-width: 1204px;
    margin: 0 auto;
`

export default App;
