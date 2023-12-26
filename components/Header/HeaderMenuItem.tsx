import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from "react";
import styles from '../../styles/header.module.scss';
import { getRandomIntInclusive } from '../../utils/utilities';

interface HeaderMenuProps {
	text: string
	link: string
	closeMenuHandler: () => void
}

const HeaderMenuItem: FC<HeaderMenuProps> = ({ text, link, closeMenuHandler }) => {

	const router = useRouter()

	const [firstDigi, setFirstDigi] = useState<number | null>(null)
	const [secondDigi, setSecondDigi] = useState<number | null>(null)


	useEffect(() => {
		setFirstDigi(getRandomIntInclusive(0, 'ABOUt'.length - 1))
		setSecondDigi(getRandomIntInclusive(0, 'StoRy'.length - 1))
	}, [])

	const handleClick = () => {
		router.push(link)
		closeMenuHandler()
	}

	return (
		<div onClick={handleClick} className={cn(
			styles.menu__item,
			router.pathname === link && styles.menu__item_active
		)}>
			{text.split('').map((letter, index) => {
				const classList = index === firstDigi || index === secondDigi ? styles.nostra : '';
				return <span key={letter} className={classList}>{letter}</span>
			})}

		</div>
	)
}


export default HeaderMenuItem