import React from 'react';
import { NavigationItem } from './navigationItem/NavigationItem';
import { Styles } from './Navigation_Styles';

type MenuPropsType = {
	type: 'desktop' | 'burger';
	closeMenu?: () => void;
};

export const Navigation: React.FC<MenuPropsType> = ({ type, closeMenu }) => {
	return (
		<Styles.StyledNav type={type}>
			<Styles.List role={'menu'}>
				<MenuItems closeMenu={closeMenu} />
			</Styles.List>
		</Styles.StyledNav>
	);
};

const navMenuHeaderState = [
	{ itemHeading: 'Home', link: '#home', id: 1 },
	{ itemHeading: 'About', link: '#about', id: 2 },
	{ itemHeading: 'Tech Stack', link: '#techStack', id: 3 },
	{ itemHeading: 'Projects', link: '#projects', id: 4 },
	{ itemHeading: 'Contact', link: '#contact', id: 5 },
];
const MenuItems: React.FC<{
	closeMenu?: () => void;
}> = ({ closeMenu }) => {
	return (
		<>
			{navMenuHeaderState.map(item => (
				<NavigationItem
					closeMenu={closeMenu}
					itemHeading={item.itemHeading}
					link={item.link}
					key={item.id}
				/>
			))}
		</>
	);
};
