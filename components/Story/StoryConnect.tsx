
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import Image from 'next/image';
import { FC } from 'react';
import metamask from '../../public//metamask.png';
import styles from '../../styles/story.module.scss';
import { Web3Store } from '../../stores/Web3Store';


const StoryConnect: FC = observer(() => {

	// const { connectWallet } = useInjection(Web3Store)

	// const connectHandler = () => { connectWallet() }


	return (
		<div className={styles.story__content}>
			<div className={styles.story__head}>Story</div>
			<div className={styles.story__main}>
				<div className={styles.story__body}>
					<h2 className={styles.story__image}>
						<Image src={metamask} width={104} height={104} alt='metamask image' />
					</h2>
					<div className={styles.story__text}>Connect your Metamask to get access <br /> to our world </div>
					<div  className={styles.story__explore}>Connect Wallet</div>
				</div>
			</div>
		</div>
	);
})

export default StoryConnect;
