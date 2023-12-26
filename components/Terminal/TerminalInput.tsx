
import { default as cn } from 'classnames';
import { ChangeEvent, FC } from 'react';
import styles from '../../styles/terminal.module.scss';


interface TerminalInputProps {
	mouseEnterHandler: () => void
	mouseLeaveHandler: () => void
	focusHandler: () => void
	blurHandler: () => void
	inputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	loader: boolean
	warningModal: boolean
	disabledInput: boolean
	inputValue: string
}

const TerminalInput: FC<TerminalInputProps> = (({ mouseEnterHandler, inputValue, loader, inputChangeHandler, mouseLeaveHandler, focusHandler, blurHandler, warningModal, disabledInput }) => {

	return (
		<div
			className={cn(
				styles.terminal__inputBox,
				warningModal && styles.terminal__inputBox_focus,
				disabledInput && styles.terminal__inputBox_disabled,
				loader && styles.terminal__inputBox_loader,
			)}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<input
				className={styles.terminal__input}
				type="text"
				value={inputValue}
				onChange={inputChangeHandler}
				disabled={disabledInput}
				onFocus={focusHandler}
				onBlur={blurHandler}
			/>
		</div>
	);
})

export default TerminalInput;
