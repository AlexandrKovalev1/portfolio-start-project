import React, { useState } from 'react';

import { BurgerMenuBody } from './burgerMenuBody/BurgerMenuBody';
import { Styles } from './BurgerMenu_Styles';

export const BurgerMenu: React.FC = () => {
	const [isOpen, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	return (
		<Styles.BurgerMenuWrapper>
			<Styles.BurgerButton
				isOpen={isOpen}
				onClick={() => setOpen(!isOpen)}
				aria-label={isOpen ? 'close' : 'open burger menu'}
			>
				<span></span>
			</Styles.BurgerButton>
			<BurgerMenuBody isOpen={isOpen} closeMenu={closeMenu} />
		</Styles.BurgerMenuWrapper>
	);
};
