import cn from 'classnames'
import { FC, MutableRefObject } from 'react'
// styles
import styles from '../../../styles/awake.module.scss'
// IMAGES
import { IMAGES, VIDEOS } from '../../images'
import SecondEye from './SecondEye'


const {
	noise,
} = IMAGES.awake



const {
	fireflies,
	frontNeon,
	frontRock,
	neonArms,

} = IMAGES.awake1

const {
	awakeSecondPageMP4,
	awakeSecondPageWebm
} = VIDEOS

interface SleepingArt1Props {
	circle1Ref: MutableRefObject<SVGCircleElement | null>
	circle2Ref: MutableRefObject<SVGCircleElement | null>
	circle3Ref: MutableRefObject<SVGCircleElement | null>
}

const SleepingArt1: FC<SleepingArt1Props> = (({ circle1Ref, circle2Ref, circle3Ref }) => {

	return (
		<>
			<div className={cn(styles.awake__art, styles.awake__art_2)}>
				<video className={'paralaxItem'} data-speed='0.5' autoPlay={true} muted={true} controls={false} loop={true} preload={'metadata'} >
					<source src={awakeSecondPageWebm} type="video/webm" />
					<source src={awakeSecondPageMP4} type="video/mp4" />
				</video>
				<SecondEye />
				<img src={frontRock} className={'paralaxItem'} data-speed='1.5' alt="frontRock" />
				<img src={neonArms} className={cn(styles.awake__pulse_1, 'paralaxItem')} data-speed='1.5' alt="neonArms" />
				<img src={frontNeon} className={cn(styles.awake__pulse_3, 'paralaxItem')} data-speed='1.5' alt="frontNeon" />
				<img src={fireflies} className={cn(styles.awake__pulse_5, 'paralaxItem')} data-speed='1.5' alt="fireflies" />
				<img src={noise} alt="noise" />
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

export default SleepingArt1