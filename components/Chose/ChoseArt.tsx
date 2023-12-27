

import cn from 'classnames'
import { FC, MutableRefObject } from 'react'
// styles
import styles from '../../styles/awake.module.scss'
// images
import { IMAGES } from '../images'


const {
	background,
	sleep,
	awake,
	light1,
	light2,
	light3
} = IMAGES.chose

const {
	noise
} = IMAGES.awake
interface FirstAwakeArtProps {
	circle1Ref: MutableRefObject<SVGCircleElement | null>
	circle2Ref: MutableRefObject<SVGCircleElement | null>
	circle3Ref: MutableRefObject<SVGCircleElement | null>
}

const ChoseArt: FC<FirstAwakeArtProps> = (({ circle1Ref, circle2Ref, circle3Ref }) => {

	return (
		<div className={cn(styles.awake__art, styles.awake__art_1)}>
			<img src={background} className={'paralaxItem'} data-speed='1' alt="background" style={{zIndex:0}}/>
	
			<img src={sleep} className={'paralaxItem'} data-speed='3' alt="sleep"style={{zIndex:1}} />
			<img src={awake} className={'paralaxItem'} data-speed='3' alt="awake"style={{zIndex:2}} />
			<img src={light1} className={'paralaxItem'} data-speed='3' alt="light1"style={{zIndex:3}} />
			<img src={light2} className={'paralaxItem'} data-speed='3' alt="light2"style={{zIndex:4}} />
			<img src={light3} className={'paralaxItem'} data-speed='3' alt="light3"style={{zIndex:5}} />
			{/* <img src={wheels} className={cn('paralaxItem', styles.awake__pulse_6)} data-speed='3' alt="wheels" /> */}
			<img src={noise} alt="noise"style={{zIndex:6}} />
			{/* <div className={cn('paralaxItem', styles.awake__droid)} data-speed='3' >
				<div className={styles.awake__animateDroid}>
					<img src={droid} alt="droid" />
				</div>
			</div> */}
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

export default ChoseArt
