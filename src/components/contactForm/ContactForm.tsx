import React, { ElementRef, useRef } from 'react';
import { ContactsGroup } from '../contacts/ContactsGroup';
import { Container } from '../container/Container';
import { FlexContainer } from '../flexContainer/FlexContainer';
import { Button } from '../button/Button';
import { Field } from './field/Field';
import { Styles } from './ContactForm_Styled';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC<{
	isOpen: boolean;
	closeModal: () => void;
}> = ({ isOpen, closeModal }) => {
	const form = useRef<ElementRef<'form'>>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();

		if (!form.current) return;

		emailjs.sendForm('service_t23yu19', 'template_p0p81wh', form.current, {
			publicKey: 'o6wJBou2bGGkTNHiR',
		});

		closeModal();
	};

	return (
		<>
			{isOpen &&
				createPortal(
					<Styles.ContactFormWrapper role={'dialog'} aria-modal='true'>
						<Styles.ButtonClose
							aria-label={'close'}
							onClick={() => closeModal()}
						>
							<span></span>
						</Styles.ButtonClose>
						<Container width={'768px'}>
							<FlexContainer
								direction={'column'}
								align={'center'}
								justify={'center'}
								gap={'25px'}
							>
								<Styles.TitleBlock>
									<h2>
										Let me know if you want to talk about a potential
										collaboration. I'm available for freelance work.
									</h2>
									<a href='mailto:yakovalev1@mail.ru'>yakovalev1@mail.ru</a>
								</Styles.TitleBlock>
								<Styles.Form ref={form} onSubmit={sendEmail}>
									<Field
										id={'name'}
										field={'input'}
										name={'name'}
										placeholder={'Your name:'}
									/>
									<Field
										id={'email'}
										field={'input'}
										name={'email'}
										placeholder={'Your email address:'}
									/>
									<Field
										id={'text'}
										field={'textarea'}
										name={'message'}
										placeholder={'Tell about the project:'}
									/>
									<Styles.SendBlock>
										<Button
											height={'60px'}
											width={'200px'}
											nameOfType={'Contact'}
											type={'submit'}
										>
											Send
										</Button>
										<ContactsGroup type={'burger'} />
									</Styles.SendBlock>
								</Styles.Form>
							</FlexContainer>
						</Container>
					</Styles.ContactFormWrapper>,
					document.body,
				)}
		</>
	);
};
