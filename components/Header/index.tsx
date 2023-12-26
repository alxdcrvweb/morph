import { FC, useState } from "react";
import styles from '../../styles/header.module.scss';
import AudioPlayer from "../AudioPlayer";
import HeaderActions from "./HeaderActions";
import HeaderMenu from "./HeaderMenu";
import cn from 'classnames'

interface HeaderProps {
	routerPath: string
}

const Header: FC<HeaderProps> = ({ routerPath }) => {

	const [openMenu, setOpenMenu] = useState(false)

	const openMenuHandler = () => {
		setOpenMenu(true)
	}

	const closeMenuHandler = () => {
		setOpenMenu(false)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__line}>
				<AudioPlayer routerPath={routerPath} />
				<HeaderActions routerPath={routerPath} openMenuHandler={openMenuHandler} />
			</div>
			<div className={styles.headerBurger} onClick={() => { setOpenMenu(prev => !prev) }}>
				<div className={cn(
					styles.headerBurger__box,
					openMenu && styles.headerBurger__box_active
				)}>
					<span></span><span></span><span></span>
				</div>
			</div>
			<HeaderMenu routerPath={routerPath} openMenu={openMenu} closeMenuHandler={closeMenuHandler} />
		</header>
	)
}


export default Header





// <div className={`${styles.burger} ${openMenu ? styles.burger_active : ''}`} onClick={() => setOpenMenu(prev => !prev)}>
// <span></span>
// <span></span>
// <span></span>
// </div>