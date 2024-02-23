import './App.css';
import {Header} from "./layout/header/Header";
import styled from "styled-components";
import {Main} from "./layout/sections/main/Main";
import {MyTechStack} from "./layout/sections/myTechStack/MyTechStack";
import {Projects} from "./layout/sections/projects/Projects";
import {LetSWorkTogether} from "./layout/sections/let’sWorkTogether/Let’sWorkTogether";
import {Footer} from "./layout/footer/Footer";
import {WhyHireMe} from "./layout/sections/whyHireMe/WhyHireMe";
import {theme} from "./styles/Theme";
import {ContactForm} from "./components/contactForm/ContactForm";
import React, {useState} from "react";
import {createPortal} from "react-dom";


function App() {

    const [openForm,setOpen] = useState(false);

    if(openForm) {
        document.body.style.overflow="hidden";
        document.body.style.position="fixed";
    } else {
        document.body.style.overflow="visible";
        document.body.style.position="static";
    }

    return (
        <AppWrapperStyled>
            <Header/>
            <Main  setOpen={setOpen}/>
            <WhyHireMe  setOpen={setOpen}/>
            <MyTechStack/>
            <Projects/>
            <LetSWorkTogether setOpen={setOpen}/>
            <ContactForm isOpen={openForm} setOpen={setOpen}/>
            <Footer/>

        </AppWrapperStyled>
    );
}


const AppWrapperStyled = styled.div`

    section {
        display: flex;
        align-items: center;
        padding: 150px 0;
        scroll-margin-top:130px;
    }
    
    @media${theme.media.largeDesc} {
        section{
            padding: 50px 0 130px;
        }
        
    }
    
    
`

export default App;
