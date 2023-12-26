import { FC, MutableRefObject } from 'react'
import cn from 'classnames'
import * as gtag from '../../../lib/gtag'
// styles
import styles from '../../../styles/sleeping.module.scss'
// import FirstStepContent from '../../FirstStepContent'
// IMAGES
import { IMAGES } from '../../images'
import FirstEye from './FirstEye'
import { useRouter } from 'next/router'

const {
	background,
	fireflies,
	city,
	art,
	neon,
	mask01,
	fog02,
	pillar,
	fog01,
	noise,
	mask02
} = IMAGES.sleeping

interface FirstSleepingArtProps {

	circle1Ref: MutableRefObject<SVGCircleElement | null>
	circle2Ref: MutableRefObject<SVGCircleElement | null>
	circle3Ref: MutableRefObject<SVGCircleElement | null>

}

const FirstSleepingArt: FC<FirstSleepingArtProps> = (({ circle1Ref, circle2Ref, circle3Ref }) => {

	const router = useRouter()
	const maskHandle = (href: string) => {
		gtag.event({
			action: 'mask_click',
			category: 'Mask',
			label: '',
			value: ''
		})
		router.push(href)
	}

	return (
		<div className={cn(styles.sleeping__art, styles.sleeping__art_1)}>
			<img src={background} className={'paralaxItem'} data-speed='2' alt="background" />
			<img src={fireflies} className={'paralaxItem'} data-speed='2' alt="fireflies" />
			<img src={city} className={'paralaxItem'} data-speed='2' alt="city" />
			<img src={art} className={'paralaxItem'} data-speed='3' alt="art" />
			<img src={neon} className={`${styles.sleeping__pulse_1} paralaxItem `} data-speed='3' alt="neon" />
			<FirstEye />
			<img src={mask01} className={'paralaxItem'} data-speed='3' alt="mask01" />
			<img src={fog02} className={'paralaxItem'} data-speed='3.5' alt="fog02" />
			<img src={pillar} className={'paralaxItem'} data-speed='4' alt="pillar" />
			<img src={fog01} className={'paralaxItem'} data-speed='4.5' alt="fog01" />
			<img src={noise} alt="noise" />
			<svg height="0" width="0" >
				<defs>
					<clipPath id="svgPath">
						<circle ref={circle1Ref} stroke="#000000" strokeMiterlimit="10" cx="10%" cy="30%" />
						<circle ref={circle2Ref} stroke="#000000" strokeMiterlimit="10" cx="50%" cy="90%" />
						<circle ref={circle3Ref} stroke="#000000" strokeMiterlimit="10" cx="80%" cy="80%" />
						<circle stroke="#000000" strokeMiterlimit="10" cx="0%" cy="0%" r='1' />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
})

export default FirstSleepingArt