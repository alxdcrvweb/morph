import cn from 'classnames';
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import { FC } from "react";
import { UserStore } from '../../stores/UserStore';
import styles from '../../styles/header.module.scss';
import { maskAddress } from '../../utils/utilities';
import Social from "../Social";
import eye from '../../public/icons/eye.svg'
import Image from 'next/image';

interface HeaderProps {
	routerPath: string
	openMenuHandler: () => void
}

const HeaderActions: FC<HeaderProps> = observer(({ routerPath, openMenuHandler }) => {

	const { address, disconnectWallet, disabledConnectBtn, connectWallet } = useInjection(UserStore)

	console.log(' HeaderActions routerPath', routerPath);

	const clickHandler = () => {
		if (address) {
			disconnectWallet()
		} else {
			connectWallet()
		}
	}

	return (
		<div className={styles.header__actions}>
			<div className={cn(styles.header__menu, '_doubleFonts')} onClick={openMenuHandler}>
				<span>Menu</span>
				<span>Menu</span>
			</div>
			<Social routerPath={routerPath} />
			<div
				className={cn(
					styles.header__connect,
					'_btn',
					!disabledConnectBtn && '_doubleFonts',
					routerPath === 'awake' && '_btn_awake',
					routerPath === 'terminal' && '_btn_terminal'
				)}
				onClick={clickHandler}
			>
				{disabledConnectBtn ? <span className={styles.header__eye}>
					<Image src={eye} alt='eye icon' width={32} height={32} /></span> :
					!address ? <>
						<span>Connect Wallet</span>
						<span>Connect Wallet</span>
					</> : <>
						<span>{maskAddress(address)}</span>
						<span>Disconnect</span>
					</>
				}
			</div>
		</div>
	)
})


export default HeaderActions





// <div className={`${styles.burger} ${openMenu ? styles.burger_active : ''}`} onClick={() => setOpenMenu(prev => !prev)}>
// <span></span>
// <span></span>
// <span></span>
// </div>