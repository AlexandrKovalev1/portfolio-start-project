import styled, { css } from 'styled-components';
import { theme } from '../../../../styles/Theme';

const BurgerMenuWrapper = styled.div``;

const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;
	top: -140px;
	right: -290px;
	width: 260px;
	height: 260px;
	transform: translateX(-50%);
	z-index: 1099999;
	cursor: pointer;

	span {
		display: block;
		width: 36px;
		height: 3px;
		background-color: ${theme.colors.icons};
		position: absolute;
		left: 40px;
		bottom: 50px;

		:before {
			content: '';
			display: block;
			width: 36px;
			height: 3px;
			background-color: ${theme.colors.icons};
			position: absolute;
			transform: translateY(-10px);
		}

		:after {
			content: '';
			display: block;
			width: 24px;
			height: 3px;
			background-color: ${theme.colors.icons};
			position: absolute;
			right: 0;
			transform: translateY(10px);
		}
	}

	${props =>
		props.isOpen &&
		css`
			span {
				background-color: rgba(225, 225, 225, 0);

				:before {
					height: 4px;
					transform: rotate(45deg) translateY(0);
				}

				:after {
					width: 36px;
					height: 4px;
					transform: rotate(-45deg) translateY(0);
				}

				:hover {
					:before,
					:after {
						background-color: red;
					}
				}
			}
		`}
`;

const MenuBody = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 80px;
	height: 100%;
	width: 100%;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 100px 0 50px;
	z-index: 999999;
	background-color: #e5e9ed;
	transform: translateX(-100%);
	transition: 1.5s;

	${props =>
		props.isOpen &&
		css`
			transform: translateX(0);
		`};

	@media screen and (max-height: 650px) and (orientation: landscape) {
		padding: 0;
		gap: 0;
	}
`;

export const Styles = {
	BurgerButton,
	BurgerMenuWrapper,
	MenuBody,
};
