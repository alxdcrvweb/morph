import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, MutableRefObject } from 'react'
// styles
import styles from '../../../styles/sleeping.module.scss'
// IMAGES
import { IMAGES, VIDEOS } from '../../images'
import SecondEye from './SecondEye'

const {
	fog1,
	fog2,
	fog3,
	stones1,
	stoneIllumination1,
	stones2,
	stoneIllumination2,
	haze1,
	rock2,
	backlight,
	firelines,
	fog4,
	fog5,
	stone,
} = IMAGES.sleeping1

const {
	noise
} = IMAGES.sleeping


const {
	sleepingSecondPageMP4,
	sleepingSecondPageWebm
} = VIDEOS


interface SecondSleepingArtProps {
	circle1Ref: MutableRefObject<SVGCircleElement | null>
	circle2Ref: MutableRefObject<SVGCircleElement | null>
	circle3Ref: MutableRefObject<SVGCircleElement | null>
}

const SecondSleepingArt: FC<SecondSleepingArtProps> = (({ circle1Ref, circle2Ref, circle3Ref }) => {
	const router = useRouter()

	return (
		<>
			<div className={cn(styles.sleeping__art, styles.sleeping__art_2)}>
				<video className={cn(styles.sleeping__video, 'paralaxItem')} data-speed='0.5' autoPlay={true} muted={true} controls={false} loop={true} preload={'metadata'} >
					<source src={sleepingSecondPageWebm} type="video/webm" />
					<source src={sleepingSecondPageMP4} type="video/mp4" />
					{/* <source src='/videos/sleeping/SleepingSecondPageVideo.webm' type="video/webm" />
					<source src='/videos/sleeping/SleepingSecondPageVideo.mp4' type="video/mp4" /> */}
				</video>
				<SecondEye />
				{/* <img src={fog1} className={cn('paralaxItem')} data-speed='1' alt="fog1" />
				<img src={fog2} className={cn('paralaxItem')} data-speed='1' alt="fog2" />
				<img src={fog3} className={cn('paralaxItem')} data-speed='1' alt="fog3" /> */}
				<img src={stones1} style={{zIndex:1}} className={cn('paralaxItem')} data-speed='2' alt="stones1" />
				<img src={stoneIllumination1} style={{zIndex:2}} className={cn(styles.sleeping__pulse_2, 'paralaxItem')} data-speed='2' alt="stoneIllumination1" />
				<img src={stones2} style={{zIndex:3}} className={cn('paralaxItem')} data-speed='1.5' alt="stones2" />
				<img src={stoneIllumination2} style={{zIndex:4}} className={cn(styles.sleeping__pulse_5, 'paralaxItem')} data-speed='1.5' alt="stoneIllumination2" />
				<img src={haze1} style={{zIndex:5}} className={cn('paralaxItem')} data-speed='3' alt="haze1" />
				<img src={rock2} style={{zIndex:6}} className={cn('paralaxItem')} data-speed='3' alt="rock2" />
				<img src={backlight} style={{zIndex:7}} className={cn(styles.sleeping__pulse_4, 'paralaxItem')} data-speed='3' alt="backlight" />
				<img src={firelines} style={{zIndex:8}} className={cn(styles.sleeping__pulse_6, 'paralaxItem')} data-speed='4.5' alt="firelines" />
				<img src={fog4} style={{zIndex:9}} className={cn('paralaxItem')} data-speed='4' alt="fog4" />
				<img src={fog5} style={{zIndex:10}} className={cn('paralaxItem')} data-speed='4' alt="fog5" />
				<img src={noise} style={{zIndex:11}}  alt="noise" />
				<div className={`${styles.sleeping__stone} paralaxItem`} data-speed='2'>
					<img onClick={() => router.push('/terminal')} src={stone} alt="stone" />
				</div>
				<svg height="0" width="0">
					<defs>
						<clipPath id="svgPath2">
							<circle ref={circle1Ref} stroke="#000000" strokeMiterlimit="10" cx="60%" cy="30%" />
							<circle ref={circle2Ref} stroke="#000000" strokeMiterlimit="10" cx="80%" cy="90%" />
							<circle ref={circle3Ref} stroke="#000000" strokeMiterlimit="10" cx="30%" cy="80%" />
							<circle stroke="#000000" strokeMiterlimit="10" cx="0%" cy="0%" r='1' />
						</clipPath>
					</defs>
				</svg>
			</div>
		</>
	)
})

export default SecondSleepingArt