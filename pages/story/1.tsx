
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import cn from 'classnames'
import styles from '../../styles/firstStoryPage.module.scss';
import storyStyles from '../../styles/story.module.scss';
import { IMAGES } from '../../components/images';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import decor1 from '../../public/showdown/decor1.svg';
import decor2 from '../../public/showdown/decor2.svg';
import Image from 'next/image';
import { getCsrfToken } from 'next-auth/react';
// export async function getServerSideProps(context:any) {
// 	const csrfToken = await getCsrfToken(context);
// 	return { props: { csrfToken } };
//   }

const {
	art, gatherer, rider
} = IMAGES.showdown

const FirstStory: NextPage = observer(() => {

	const isMobile = useMediaQuery({ maxWidth: 767.98 })

	const router = useRouter()

	const handleClick = () => {
		router.push('/story')
	}

	if (isMobile) router.push('/sleeping')

	return (
		<div className={styles.firstStoryPage}>
			<div className={cn(styles.firstStoryPage__container, '_container')}>
				<div className={styles.firstStoryPage__box}>
					<div className={styles.showdown}>
						<h1 className={cn(styles.showdown__title, '_subtitle')}>
							<span>01</span>
							<img src="/icons/storyDecor.svg" alt="" />
							The Showdown
						</h1>
						<div className={styles.showdown__grid}>
							<div className={cn(styles.showdown__bigText, '_bigText')}>City of Ayyon - the only inhabitated place left on the planet after the Nightmare Fuel also known as Great Conflict. </div>
							<div className={cn(styles.showdown__littleText, '_littleText')}>As a reminder of the conflict, in the very <br /> middle of the city you can see lonely <br /> skyscraping Agreement Tower, which <br /> divide Ayyon into two districts: Slum <br /> and Polis.</div>
						</div>
						<div className={styles.showdown__image}>
							<img src={art} alt="" />
						</div>
					</div>
					<div className={styles.gatherer}>
						<div className={styles.gatherer__grid}>
							<div className={styles.gatherer__image}>
								<img src={gatherer} alt="" />
							</div>
							<div className={styles.gatherer__content}>
								<h1 className={cn(styles.gatherer__title, '_subtitle')}>
									The Gatherer
								</h1>
								<div className={styles.gatherer__box}>
									<p className={'_littleText'}>Everyone, who has been through the entangled streets of the Slums at least once, has seen a horned figure <br /> in a cloak slowly wandering somewhere.</p>
									<p className={'_bigText'}>Lanky, skinny, wearing a huge skull left over from beasts that no one living in this city has ever seen, leaning on a staff in the top of which incense is always smoked and a dim light burns, the Gatherer carries a great variety of masks behind him.</p>
									<p className={'_littleText'}>Masks are an important part of sleeper culture, they protect delicate eyes and important dreams, but no one has ever <br /> seen the Gatherer create or use these masks himself.</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rider}>
						<div className={styles.rider__grid}>
							<div className={styles.rider__cell}>
								<h1 className={cn(styles.rider__title, '_subtitle')}>
									The Rider
								</h1>
								<p className={'_littleText'}>Vigilant Commune is putting its all into overcoming aftermath of the Nightmare Fuel and moving forward as a civilization.</p>
							</div>
						</div>
						<div className={styles.rider__image}>
							<img src={rider} alt="" />
						</div>
						<div className={styles.rider__grid}>
							<div className={styles.rider__cell}>
								<div className={styles.gatherer__box}>
									<p className={'_bigText'}>Rider is not like that. She&apos;s not interested <br /> in distant, bright future of humanity. She&apos;s <br /> interested in her motorcycle, <br /> the navigation drone she built by herself, <br /> and how to bring back more goods to sell <br /> from her next ruin trip in the rocky wastes. </p>
									<p className={'_littleText'}>
										Others avoid her - she seems too <br /> down-to-earth and material, but time <br /> will tell - maybe this is the right way.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>

						<div className={cn(storyStyles.story__content, storyStyles.story__content_padding)}>
							<div className={storyStyles.story__head}>Next chapter</div>
							<div className={storyStyles.story__main}>
								<div className={storyStyles.story__body}>
									<h2 className={cn(storyStyles.story__title, '_subtitle')}>
										<span>02</span>
										<img src="/icons/storyDecor.svg" alt="" />
										The Encounter
									</h2>
									<div className={storyStyles.story__status}>Work in progress</div>
									<div onClick={handleClick} className={cn(storyStyles.story__explore, storyStyles.story__explore_dark)}>Back to chapters</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
})

export default FirstStory;
