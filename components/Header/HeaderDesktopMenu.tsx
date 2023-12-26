import Image from 'next/image';
import { FC } from "react";
import close from '../../public/icons/close.svg';
import closeHover from '../../public/icons/closeHover.svg';
import styles from '../../styles/header.module.scss';
import HeaderMenuItem from './HeaderMenuItem';

interface HeaderMenuProps {
	closeMenuHandler: () => void
}

const HeaderDesktopMenu: FC<HeaderMenuProps> = ({ closeMenuHandler }) => {

	const menuList = [
		{ text: 'Journey', link: '/sleeping', id: 1 },
		{ text: 'StoRy', link: '/story', id: 2 },
	]

	return (
		<>
			<div className={styles.menu__list}>
				{menuList.map(item => <HeaderMenuItem key={item.id} {...item} closeMenuHandler={closeMenuHandler} />)}
			</div>
			<div onClick={closeMenuHandler} className={styles.menu__close}>
				<span>
					<Image src={close} width={32} height={32} alt='close icon' />
				</span>
				<span>
					<Image src={closeHover} width={32} height={32} alt='close hover icon' />
				</span>
			</div>
		</>
	)
}


export default HeaderDesktopMenu