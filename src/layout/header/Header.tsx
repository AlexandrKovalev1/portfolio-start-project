import React from 'react';
import { Container } from '../../components/container/Container';
import { FlexContainer } from '../../components/flexContainer/FlexContainer';
import { Styles } from './Header_Styles';
import { Logo } from '../../components/logo/Logo';
import { HeaderMenu } from './headerMenu/HeaderMenu';

export const Header: React.FC = () => {
	return (
		<Styles.StyledHeader>
			<Container width={'1220px'}>
				<FlexContainer align={'center'} justify={'space-between'}>
					<Logo />
					<HeaderMenu />
				</FlexContainer>
			</Container>
		</Styles.StyledHeader>
	);
};
