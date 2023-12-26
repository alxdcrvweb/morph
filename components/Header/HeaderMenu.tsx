import cn from 'classnames';
import { FC } from "react";
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import styles from '../../styles/header.module.scss';
import HeaderDesktopMenu from './HeaderDesktopMenu';
import HeaderMobileMenu from './HeaderMobileMenu';

interface HeaderMenuProps {
	routerPath: string
	openMenu: boolean
	closeMenuHandler: () => void
}

const HeaderMenu: FC<HeaderMenuProps> = ({ routerPath, openMenu, closeMenuHandler }) => {

	const isTablet = useMediaQuery({ maxWidth: 991.98 })

	return (
		// @ts-ignore
		<CSSTransition
			in={openMenu}
			timeout={500}
			classNames={{
				enterDone: styles.fadeEnterDone,
				enter: styles.fadeEnter,
				enterActive: styles.fadeEnterActive,
				exit: styles.fadeExit,
				exitActive: styles.fadeExitActive,
			}}
			mountOnEnter
			unmountOnExit
		> 
	 {/* @ts-ignore */}
			<nav className={cn(styles.menu)}>
				{isTablet ? <HeaderMobileMenu routerPath={routerPath} closeMenuHandler={closeMenuHandler} />
					: <HeaderDesktopMenu closeMenuHandler={closeMenuHandler} />}
			</nav>
		</CSSTransition>
	)
}


export default HeaderMenu