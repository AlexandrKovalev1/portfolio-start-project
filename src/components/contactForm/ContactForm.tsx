import React from 'react';
import {ContactsGroup} from "../contacts/ContactsGroup";
import {Container} from "../container/Container";
import {FlexContainer} from "../flexContainer/FlexContainer";
import {Button} from "../button/Button";
import {Field} from "./field/Field";
import {Styles} from "./ContactForm_Styled";
import {createPortal} from "react-dom";

export const ContactForm: React.FC<{
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({isOpen, setOpen}) => {
    const menuContactsState = [
        {iconId: "github", viewBox: "0 0 88 88", href: "#", id: 1},
        {iconId: "instagram", viewBox: "0 0 32 32", href: "#", id: 2},
        {iconId: "telegram", viewBox: "0 0 32 35", href: "#", id: 3},
        {iconId: "whatsapp", viewBox: "0 0 32 32", href: "#", id: 4}
    ];


    return (
        <>
            {isOpen && createPortal(
                <Styles.ContactFormWrapper role={"dialog"} aria-modal="true">
                    <Styles.ButtonClose aria-label={"close"} onClick={() => setOpen(false)}>
                        <span></span>
                    </Styles.ButtonClose>
                    <Container width={"768px"}>
                        <FlexContainer direction={"column"} align={"center"} justify={"center"} gap={"25px"}>
                            <Styles.TitleBlock>
                                <h2>
                                    Let me know if you want to talk about a potential collaboration. I'm available for
                                    freelance
                                    work.
                                </h2>
                                <a href="mailto:yakovalev1@mail.ru">yakovalev1@mail.ru</a>
                            </Styles.TitleBlock>
                            <Styles.Form action="">
                                <Field id={"name"} field={"input"} name={"name"} placeholder={"Your name:"}/>
                                <Field id={"email"} field={"input"} name={"email"} placeholder={"Your email address:"}/>
                                <Field id={"text"} field={"textarea"} name={"message"}
                                       placeholder={"Tell about the project:"}/>
                                <Styles.SendBlock>
                                    <Button height={"60px"} width={"200px"} nameOfType={"Contact"} type={"submit"}
                                            onClick={() => {
                                                setOpen(!isOpen)
                                            }}>Send</Button>
                                    <ContactsGroup type={"burger"}/>
                                </Styles.SendBlock>
                            </Styles.Form>
                        </FlexContainer>
                    </Container>
                </Styles.ContactFormWrapper>, document.getElementById("modal") as HTMLElement)}
        </>
    );
};


