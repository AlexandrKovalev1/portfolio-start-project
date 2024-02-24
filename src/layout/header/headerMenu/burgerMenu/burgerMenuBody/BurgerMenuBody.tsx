import React from 'react';
import { Menu } from '../../../../../components/menu/Menu';
import { Styles } from '../BurgerMenu_Styles';

type BurgerMenuBodyPropsType = {
	isOpen: boolean;
	closeMenu: () => void;
};
export const BurgerMenuBody: React.FC<BurgerMenuBodyPropsType> = ({
	isOpen,
	closeMenu,
}) => {
	return (
		<Styles.MenuBody isOpen={isOpen} role={'dialog'} aria-modal>
			<Menu type={'burger'} closeMenu={closeMenu} />
		</Styles.MenuBody>
	);
};
