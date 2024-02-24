import React from 'react';
import { Styles } from './NavigationItem_Styles';

type MenuItemPropsType = {
	itemHeading: string;
	link: string;
	closeMenu?: () => void;
};
export const NavigationItem: React.FC<MenuItemPropsType> = ({
	link,
	itemHeading,
	closeMenu,
}) => {
	return (
		<li
			role={'menuitem'}
			aria-label={`${itemHeading} page`}
			onClick={() => {
				closeMenu && closeMenu();
			}}
		>
			<Styles.Link href={link}>{itemHeading}</Styles.Link>
		</li>
	);
};
