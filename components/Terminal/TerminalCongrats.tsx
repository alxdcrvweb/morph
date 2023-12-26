
import { FC } from 'react';
import styles from '../../styles/terminal.module.scss';


const TerminalCongrats: FC = (() => {

	return (
		<div className={styles.congratulations}>
			<div className={styles.congratulations__text}>
				<span>
					Congratulations! <br />
					The 1st eye is opened
				</span>
				<span>Terminal now preparing phase 2</span>
			</div>
		</div>
	);
})

export default TerminalCongrats;
