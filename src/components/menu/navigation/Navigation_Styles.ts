import styled, { css } from 'styled-components';

type StyledNavPropsType = {
	type: 'desktop' | 'burger';
};

const List = styled.ul``;

const StyledNav = styled.nav<StyledNavPropsType>`
	${List} {
		display: flex;
		align-items: center;
		gap: 54px;
	}

	${props =>
		props.type === 'desktop' &&
		css<StyledNavPropsType>`
			${List} {
				font-size: 1.6rem;
			}
		`};

	${props =>
		props.type === 'burger' &&
		css<StyledNavPropsType>`
			${List} {
				font-size: calc((100vw - 360px) / (992 - 360) * (4 - 3) + 3rem);
				flex-direction: column;
				justify-content: space-around;
				height: 100%;

				@media screen and (max-height: 650px) and (orientation: landscape) {
					gap: 10px;
				}
			}
		`};
`;

export const Styles = {
	StyledNav,
	List,
};
