
import { FC } from 'react';
import styles from '../styles/terminal.module.scss';


interface CongratulationModalProps {
	text: string
	setAttention: ({ }: boolean) => void
	title: string
}


const CongratulationModal: FC<CongratulationModalProps> = (({ text, setAttention, title }) => {

	const clickHandler = () => { setAttention(false) }

	return (
		<div onClick={clickHandler} className={styles.congratulationModal}>
			<svg className={styles.congratulationModal__bg} width="439" height="131" viewBox="0 0 439 131" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 0.5V94.6638L53.3313 129H437V2H2" strokeWidth="3" />
			</svg>
			<div className={styles.congratulationModal__header}>
				<div className={styles.congratulationModal__title}>
					{title !== '' ? `// ${title}` : '// Attention'}
				</div>
			</div>
			<div className={styles.congratulationModal__body}>
				<div className={styles.congratulationModal__text}>
					{text !== '' ? text : <>Look! What’s in that <a href='https://opensea.io/collection/morpheus-terminal' target={'_blank'} rel="noreferrer">water</a>?</>}
				</div>
			</div>
		</div>
	);
})

export default CongratulationModal;
