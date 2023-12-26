
import cn from 'classnames';
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import closedEye from '../public/icons/closed_eye.svg';
import eye from '../public/icons/eye.svg';
import styles from '../styles/aboutSection.module.scss';

const AboutPageLink: FC = () => {

	const router = useRouter();
	const ChangeSideHandler = () => router.asPath === '/sleeping' ? router.push('/awake') : router.push('/sleeping')

	return (
		<div
			className={cn(
				styles.aboutSection__route,
				router.asPath === '/sleeping' && styles.aboutSection__route_light
			)}
			onClick={ChangeSideHandler}
		>
			<p>{router.asPath === '/sleeping' ? 'To the insomniacs side' : 'To the sleepers side'}</p>
			<div className={styles.aboutSection__icon}>
				<Image src={closedEye} alt='closed eye icon' layout='fill' />
				<Image src={eye} alt='open eye icon' layout='fill' />
			</div>
		</div>
	)
}


export default AboutPageLink