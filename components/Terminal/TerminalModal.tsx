
import { FC } from 'react';
import styles from '../../styles/terminal.module.scss';

const TerminalModal: FC = (() => {

	return (
		<div className={styles.modal}>
			You can give it a try and type your answer here once. <br />
			<span>
				If you want to try one more time, you need to leave 0,02 eth under your pillow before you go to sleep. <br />
				Winner gets unlimited sweet dreams, others get ((((@))))
			</span>
		</div>
	);
})

export default TerminalModal;
