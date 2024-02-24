import React from 'react';
import { ContactItem } from './contactItem/ContactItem';
import { Styles } from './ContactsGroup_Styles';

type ContactsGroupPropsType = {
	type: 'desktop' | 'burger' | 'footer';
	closeMenu?: () => void;
};

export const ContactsGroup: React.FC<ContactsGroupPropsType> = ({
	type,
	closeMenu,
}) => {
	return (
		<Styles.ContactsGroupWrapper type={type}>
			<Styles.List>
				<Contacts closeMenu={closeMenu} />
			</Styles.List>
		</Styles.ContactsGroupWrapper>
	);
};

const menuContactsState = [
	{
		iconId: 'github',
		viewBox: '0 0 88 88',
		href: 'https://github.com/AlexandrKovalev1',
		id: 1,
	},
	{ iconId: 'instagram', viewBox: '0 0 32 32', href: '#', id: 2 },
	{
		iconId: 'telegram',
		viewBox: '0 0 32 35',
		href: 'https://t.me/FrontendDevAlexander',
		id: 3,
	},
	{
		iconId: 'whatsapp',
		viewBox: '0 0 32 32',
		href: 'https://wa.me/79811064323',
		id: 4,
	},
];

const Contacts: React.FC<{
	closeMenu?: () => void;
}> = ({ closeMenu }) => {
	return (
		<>
			{menuContactsState.map(item => (
				<ContactItem
					closeMenu={closeMenu}
					iconId={item.iconId}
					viewBox={item.viewBox}
					href={item.href}
					key={item.id}
				/>
			))}
		</>
	);
};
