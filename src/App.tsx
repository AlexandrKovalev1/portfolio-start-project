import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <AppWrapperStyled>
            <Header/>
            <Main/>
        </AppWrapperStyled>
    );
}


const AppWrapperStyled = styled.div`
    padding: 41px 177px 0;
    &>*:not(:last-child){
        margin-bottom: 200px;
    }
    
`

export default App;
