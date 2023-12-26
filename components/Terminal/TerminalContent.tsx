
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { UserStore } from '../../stores/UserStore';
import styles from '../../styles/terminal.module.scss';
import CongratulationModal from '../CongratulationModal';
import TerminalCongrats from './TerminalCongrats';
import TerminalConnect from './TerminalConnect';
import TerminalInput from './TerminalInput';
import TerminalModal from './TerminalModal';


const TerminalContent: FC = observer(() => {


	const { loader, attention, setAttentionModal, web3, provider, congratsText, congratsTitle, connectWallet, checkNetwork, paused, pausedMint, warningModal, setWarningModal, mint, disabledInput } = useInjection(UserStore)

	const [inputValue, setInputValue] = useState('');
	const [hover, setHover] = useState(false);


	//@ts-ignore
	useEffect(async () => {
		await checkNetwork()
		paused()
	}, [web3, provider])

	const mintHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (web3 && !disabledInput && inputValue !== '') {
			mint(inputValue)
			setInputValue('')
		}
	}


	const mouseEnterHandler = () => {
		setHover(true)
	}
	const mouseLeaveHandler = () => {
		setHover(false)
	}
	const focusHandler = () => {
		setWarningModal(true)
	}
	const blurHandler = () => {
		setWarningModal(false)
	}
	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}


	return (
		<>
			<form className={styles.terminal__content} onSubmit={mintHandler}>
				{!web3 && <TerminalConnect hover={hover} connectWallet={connectWallet} />}
				{pausedMint ?
					<TerminalCongrats /> :
					<TerminalInput
						mouseEnterHandler={mouseEnterHandler}
						mouseLeaveHandler={mouseLeaveHandler}
						focusHandler={focusHandler}
						blurHandler={blurHandler}
						inputChangeHandler={inputChangeHandler}
						warningModal={warningModal}
						disabledInput={disabledInput}
						loader={loader}
						inputValue={inputValue}
					/>
				}
			</form>
			<CSSTransition
				in={warningModal}
				timeout={200}
				classNames={{
					enter: styles.enter,
					enterActive: styles.enterActive,
					exit: styles.exit,
					exitActive: styles.exitActive,
				}}
				mountOnEnter
				unmountOnExit
			>
				<TerminalModal />
			</CSSTransition >
			<CSSTransition
				in={attention}
				timeout={200}
				classNames={{
					enter: styles.enter,
					enterActive: styles.enterActive,
					exit: styles.exit,
					exitActive: styles.exitActive,
				}}
				mountOnEnter
				unmountOnExit
			>
				<CongratulationModal text={congratsText} title={congratsTitle} setAttention={setAttentionModal} />
			</CSSTransition >
		</>
	);
})

export default TerminalContent;
