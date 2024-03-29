import React from 'react';
import { GroupOfHeadingSection } from '../../../components/groupOfHeadingSection/GroupOfHeadingSection';
import styled from 'styled-components';
import { Button } from '../../../components/button/Button';
import { FlexContainer } from '../../../components/flexContainer/FlexContainer';
import { Container } from '../../../components/container/Container';

export const LetSWorkTogether: React.FC<{ openModal: () => void }> = ({
	openModal,
}) => {
	return (
		<StyledSectionLetsWork id={'contact'}>
			<Container width={'712px'}>
				<FlexContainer direction={'column'} justify={'center'} align={'center'}>
					<GroupOfHeadingSection
						heading={'Let’s work together'}
						description={
							'I’m available for freelance work. Have any projects in your mind? Just feel free to contact me'
						}
					/>
					<Button
						nameOfType={'Contact'}
						height={'60px'}
						width={'186px'}
						onClick={() => openModal()}
					>
						Contact me
					</Button>
				</FlexContainer>
			</Container>
		</StyledSectionLetsWork>
	);
};

const StyledSectionLetsWork = styled.section`
	background-color: #d6d9dd;
`;
