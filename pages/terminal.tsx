
import { observer } from 'mobx-react';
import { FC } from 'react';
import { VIDEOS } from '../components/images';
import TerminalContent from '../components/Terminal/TerminalContent';
import styles from '../styles/terminal.module.scss';

const {
	terminalMP4, // /videos/terminal/TerminalEye.mp4
	terminalWebm, // /videos/terminal/TerminalEye.webm
} = VIDEOS

const Terminal: FC = observer(() => {

	return (
		<section className={styles.terminal}>
			<video className={styles.terminal__video} autoPlay={true} muted={true} controls={false} loop={true} preload={'metadata'} >
				<source src={terminalWebm} type="video/webm" />
				<source src={terminalMP4} type="video/mp4" />
			</video>
			<TerminalContent />
		</section>
	);
})

export default Terminal;
