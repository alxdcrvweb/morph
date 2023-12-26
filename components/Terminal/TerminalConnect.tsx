
import { default as cn } from 'classnames';
import { FC } from 'react';
import styles from '../../styles/terminal.module.scss';


interface TerminalConnectProps {
	connectWallet: () => void
	hover: boolean
}

const TerminalConnect: FC<TerminalConnectProps> = (({ connectWallet, hover }) => {


	return (
		<div className={cn(styles.terminal__connect, hover ? styles.terminal__connect_hover : '')} onClick={() => connectWallet()}>
			<div className={styles.terminal__arrows}>
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M30 22L16 15L2 22" stroke="white" />
					<path d="M22.5 14.5L16 11L9.5 14.5" stroke="white" />
				</svg>
			</div>
			<div className={styles.terminal__text} >your metamask</div>
		</div>
	);
})

export default TerminalConnect;
