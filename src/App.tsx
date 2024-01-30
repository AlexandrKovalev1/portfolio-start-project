import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";


function App() {
    return (
        <AppWrapperStyled>
            <Header/>
        </AppWrapperStyled>
    );
}


const AppWrapperStyled = styled.div`
    padding: 41px 177px;
    display:grid;
    grid-template-rows: 100px 1fr 180px;
    
`

export default App;
