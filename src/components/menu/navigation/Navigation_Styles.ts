import styled, {css} from "styled-components";

type StyledNavPropsType = {
    type: "desktop" | "burger"
};

const List = styled.ul``;

const StyledNav = styled.nav<StyledNavPropsType>`
    ${List} {
        display: flex;
        align-items: center;
        gap: 54px;
    }


    ${props => props.type === "desktop" && css<StyledNavPropsType>`
        ${List} {
            font-size: 16px;

        }`};
    

    ${props => props.type === "burger" && css<StyledNavPropsType>`
        
        ${List} {
            font-size: calc((100vw - 360px) / (992 - 360) * (40 - 30) + 30px);
            flex-direction: column;
            justify-content: space-around;
            height: 100%;

            @media screen and (max-height: 650px) and (orientation: landscape) {
                gap: 10px;
            };

        }
    ;`};
`;

export const Styles = {
    StyledNav,
    List
};