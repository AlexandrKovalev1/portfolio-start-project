import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const ContactsGroup = () => {
    return (
        <ContactsGroupWrapper>
            <ul>
                <li>
                    <a href="">
                        <Icon iconId= {'iconGithub'}/>
                    </a>
                </li>
                {/*<li>*/}
                {/*    <a href="">*/}
                {/*        <Icon iconId= {}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="">*/}
                {/*        <Icon iconId= {}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="">*/}
                {/*        <Icon iconId= {}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
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
