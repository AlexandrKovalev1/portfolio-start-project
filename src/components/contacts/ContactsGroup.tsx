import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const ContactsGroup = () => {
    return (
        <ContactsGroupWrapper>
            <ul>
                <li>
                    <a href="">
                        <Icon iconId={'iconGithub'} width={'30'} height={'30'} viewBox={'0 0 88 88'}/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'instagram'} width={'30'} height={'30'} viewBox={'0 0 32 32'}/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'telegram'} width={'30'} height={'30'} viewBox={'0 0 32 35'}/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'whatsapp'} width={'30'} height={'30'} viewBox={'0 0 32 32'}/>
                    </a>
                </li>
            </ul>
        </ContactsGroupWrapper>
    );
};

const ContactsGroupWrapper = styled.div`
    ul {
        display: flex;
        gap: 20px;
    }
`
