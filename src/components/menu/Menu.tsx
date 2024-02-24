import React from 'react';
import { Navigation } from './navigation/Navigation';
import { ContactsGroup } from '../contacts/ContactsGroup';

type MenuPropsType = {
	type: 'desktop' | 'burger';
	closeMenu?: () => void;
};

export const Menu: React.FC<MenuPropsType> = ({ type, closeMenu }) => {
	return (
		<>
			<Navigation type={type} closeMenu={closeMenu} />
			<ContactsGroup type={type} closeMenu={closeMenu} />
		</>
	);
};
