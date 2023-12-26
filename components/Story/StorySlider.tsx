
import cn from 'classnames';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import SwiperCore, { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/story.module.scss';
import { IMAGES } from '../images';
import { useMediaQuery } from 'react-responsive'
import { useInjection } from 'inversify-react';
import { UserStore } from '../../stores/UserStore';
import StorySliderList from './StorySliderList';


const {
	firstSleeping,
	secondSleeping,
} = IMAGES.arts

const StorySlider: FC = observer(() => {

	const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
	const { tokensList, getTokens, web3 } = useInjection(UserStore)
	const router = useRouter()
	const isMobile = useMediaQuery({ maxWidth: 767.98 })

	useEffect(() => {
		if (web3) getTokens()
	}, [web3])

	const slideTo = (index: number) => { swiperRef!.slideTo(index, 0) };
	const slideToPrev = () => { swiperRef!.slidePrev(1000, false) };
	const slideToNext = () => { swiperRef!.slideNext(1000, false) };

	if (isMobile) router.push('/sleeping')

	return (
		<Swiper
			className={styles.story__slider}
			onSwiper={swiper => setSwiperRef(swiper)}
			observer={true}
			observeParents={true}
			effect={"fade"}
			speed={1000}
			slidesPerView={1}
			modules={[EffectFade]}
			allowTouchMove={false}
		>
			<SwiperSlide className={styles.story__slide} >
				<div className={styles.story__bg}>
					<img src={firstSleeping} alt="first art" />
				</div>
				<div className={styles.story__content}>
					<div className={styles.story__head}>Story</div>
					<div className={styles.story__main}>
						<div className={styles.story__body}>
							<h2 className={cn(styles.story__title, '_subtitle')}>
								<span>01</span>
								<img src="/icons/storyDecor.svg" alt="" />
								The Showdown
							</h2>
							<div className={styles.story__text}>City of Ayyon - the only inhabitated place left on the planet after the Nightmare Fuel also known as Great Conflict. </div>
							<div className={styles.story__status}>In progress</div>
							{tokensList?.length > 0 && <StorySliderList tokensList={tokensList} />}
							<div onClick={() => router.push('/story/1')} className={styles.story__explore}>Explore</div>
						</div>
					</div>
					<div className={styles.story__footer}>
						{/* <div onClick={slideToPrev} className={cn(styles.story__navigation, styles.story__navigation_prev)}>
			<div className={styles.story__direction}>Prev</div>
			<div className={styles.story__step}>01 / The Showdown</div>
			<div className={styles.story__arrow}></div>
		</div> */}
						<div onClick={slideToNext} className={cn(styles.story__navigation, styles.story__navigation_next)}>
							<div className={styles.story__direction}>Next</div>
							<div className={styles.story__step}>02 / The Encounter</div>
							<div className={styles.story__arrow}></div>
						</div>
					</div>
				</div>
			</SwiperSlide >
			<SwiperSlide className={styles.story__slide} >
				<div className={styles.story__bg}>
					<img src={secondSleeping} alt="second art" />
				</div>
				<div className={styles.story__content}>
					<div className={styles.story__head}>Story</div>
					<div className={styles.story__main}>
						<div className={styles.story__body}>
							<h2 className={cn(styles.story__title, '_subtitle')}>
								<span>02</span>
								<img src="/icons/storyDecor.svg" alt="" />
								The Encounter
							</h2>
							<div className={styles.story__status}>Coming soon</div>
						</div>
					</div>
					<div className={styles.story__footer}>
						<div onClick={slideToPrev} className={cn(styles.story__navigation, styles.story__navigation_prev)}>
							<div className={styles.story__direction}>Prev</div>
							<div className={styles.story__step}>01 / The Showdown</div>
							<div className={styles.story__arrow}></div>
						</div>
						{/* <div onClick={slideToNext} className={cn(styles.story__navigation, styles.story__navigation_next)}>
					<div className={styles.story__direction}>Next</div>
					<div className={styles.story__step}>03 / The Encounter</div>
					<div className={styles.story__arrow}></div>
				</div> */}
					</div>
				</div>
			</SwiperSlide >
		</Swiper >
	);
})

export default StorySlider;
