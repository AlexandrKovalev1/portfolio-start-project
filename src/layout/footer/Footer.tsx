import React from 'react';
import { ContactsGroup } from '../../components/contacts/ContactsGroup';
import { Container } from '../../components/container/Container';
import { Styles } from './Footer_Styles';

export const Footer = () => {
	return (
		<Styles.Footer>
			<Container width={'1274px'}>
				<Styles.FooterContentWrapper>
					<small>
						© 2024 <b>Alexandr Kovalyov</b>{' '}
						<span style={{ whiteSpace: 'nowrap' }}>
							with Love and Coffee. All rights reserved
						</span>
					</small>
					<ContactsGroup type={'footer'} />
				</Styles.FooterContentWrapper>
			</Container>
		</Styles.Footer>
	);
};
