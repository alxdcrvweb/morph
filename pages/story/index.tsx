
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { useEffect } from 'react';
import StoryConnect from '../../components/Story/StoryConnect';
import StorySlider from '../../components/Story/StorySlider';
import styles from '../../styles/story.module.scss';


const Story: NextPage = observer(() => {
	// useEffect(() => {
	// 	if (!address || !web3) {
	// 		connectWallet()
	// 	}
	// }, [])

	return (
		<section className={styles.story}>
			{<StorySlider />}
		</section>
	);
})

export default Story;
