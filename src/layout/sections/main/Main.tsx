import React from "react";
import ava from "../../../assets/images/avaPng.png";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/button/Button";
import {Styles} from "./Main_Styles";
import Typewriter from 'typewriter-effect';


export const Main:React.FC = () => {
    return (
        <Styles.Main id={"home"}>
            <Container width={"1220px"}>
                <Styles.GridBox>
                    <Styles.TitleBlock>
                        <Styles.Heading><p>Frontend developer</p>
                            <Typewriter
                                options={{
                                    strings: ["Frontend developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></Styles.Heading>
                        <Styles.StyledSpan>Hello I’m</Styles.StyledSpan>
                        <Styles.StyledSpan accent>Alexandr Kovalyov</Styles.StyledSpan>
                    </Styles.TitleBlock>

                    <Styles.DescriptionBlock>
                        <Styles.TextAbout>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et,
                            et. Non semper blandit vitae semper blandit. Tellus dignissim a dui turpis arcu, nulla
                            ullamcorper tincidunt.
                        </Styles.TextAbout>
                        <Button nameOfType={"Get"} height={"60px"} width={"215px"}>GET IN TOUCH</Button>
                    </Styles.DescriptionBlock>

                        <Styles.Photo src={ava} alt="photoCard"/>



                </Styles.GridBox>
            </Container>
        </Styles.Main>
    );
};


