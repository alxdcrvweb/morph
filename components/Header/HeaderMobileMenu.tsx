import styles from '../../styles/header.module.scss';
import { FC, useEffect, useState } from "react";
import { getRandomIntInclusive } from '../../utils/utilities';
import AudioPlayer from '../AudioPlayer';
import Social from '../Social';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';

interface HeaderMobileMenuProps {
	routerPath: string
	closeMenuHandler: () => void
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ routerPath, closeMenuHandler }) => {


	const [firstDigi, setFirstDigi] = useState<number | null>(null)
	const [secondDigi, setSecondDigi] = useState<number | null>(null)
	const { scroll } = useLocomotiveScroll()
	const router = useRouter()
	useEffect(() => {
		setFirstDigi(getRandomIntInclusive(0, 'MORPHEUS'.length - 1))
		setSecondDigi(getRandomIntInclusive(0, 'MORPHEUS'.length - 1))
	}, [])

	const menuList = [
		{ id: 1, text: 'Journey', pushTo: '/' },
		{ id: 2, text: 'Story', pushTo: '/story/1' },
		{ id: 3, text: 'Factions', pushTo: '/sleeping' },
		{ id: 3, text: 'Gallery', pushTo: '/gallery' },
	]

	const handleClick = (pushTo: string) => {
		closeMenuHandler()
		router.push(pushTo) 
		// scroll.scrollTo(scrollTo, { duration: 1, disableLerp: false })
	}

	return (
		<div className={styles.menu__box}>
			<div className={styles.menu__head}>
				<div className={styles.menu__title}>
					{'MORPHEUS'.split('').map((letter, index) => {
						const classList = index === firstDigi || index === secondDigi ? 'nostra' : '';
						return <span key={letter} className={classList}>{letter}</span>
					})}
				</div>
				<img src='/close.svg' onClick={closeMenuHandler}/>
			</div>
			<div className={styles.menu__main}>
				{menuList.map(el => (
					<div
						key={el.id}
						className={styles.menu__route}
						onClick={() => { handleClick(el.pushTo) }}
					>{el.text}</div>
				))}
				{/* <div className={styles.menu__info}>More features in desktop version</div> */}
			</div>
			<div className={styles.menu__footer}>
				<AudioPlayer routerPath={routerPath} />
				<Social routerPath={routerPath} />
			</div>
		</div>
	)
}


export default HeaderMobileMenu