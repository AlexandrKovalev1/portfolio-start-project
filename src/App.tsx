import './App.css';
import { Header } from './layout/header/Header';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { MyTechStack } from './layout/sections/myTechStack/MyTechStack';
import { Projects } from './layout/sections/projects/Projects';
import { LetSWorkTogether } from './layout/sections/let’sWorkTogether/Let’sWorkTogether';
import { Footer } from './layout/footer/Footer';
import { WhyHireMe } from './layout/sections/whyHireMe/WhyHireMe';
import { theme } from './styles/Theme';
import { ContactForm } from './components/contactForm/ContactForm';
import React, { useState } from 'react';

function App() {
	const [openForm, setOpen] = useState(false);

	const openModal = () => {
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
		setOpen(true);
	};

	const closeModal = () => {
		document.body.style.overflow = 'visible';
		document.body.style.position = 'static';
		setOpen(false);
	};

	return (
		<AppWrapperStyled>
			<Header />
			<Main openModal={openModal} />
			<WhyHireMe openModal={openModal} />
			<MyTechStack />
			<Projects />
			<LetSWorkTogether openModal={openModal} />
			<ContactForm isOpen={openForm} closeModal={closeModal} />
			<Footer />
		</AppWrapperStyled>
	);
}

const AppWrapperStyled = styled.div`
	section {
		display: flex;
		align-items: center;
		padding: 150px 0;
	}

	@media${theme.media.largeDesc} {
		section {
			scroll-margin-top: 130px;
			min-height: 100vh;
			padding: 50px 0 130px;
		}
	}
`;

export default App;
