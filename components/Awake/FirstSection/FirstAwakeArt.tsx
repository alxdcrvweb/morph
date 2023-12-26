

import cn from 'classnames'
import { FC, MutableRefObject } from 'react'
// styles
import styles from '../../../styles/awake.module.scss'
// images
import { IMAGES } from '../../images'
import AwakeEye from './FirstEye'


const {
	background,
	fireflies,
	art,
	neonArt05,
	neonArt01,
	neonArt02,
	neonArt03,
	neonArt04,
	track,
	neon01,
	neon02,
	neon03,
	city,
	girl,
	wheels,
	noise,
	droid
} = IMAGES.awake


interface FirstAwakeArtProps {
	circle1Ref: MutableRefObject<SVGCircleElement | null>
	circle2Ref: MutableRefObject<SVGCircleElement | null>
	circle3Ref: MutableRefObject<SVGCircleElement | null>
}

const FirstAwakeArt: FC<FirstAwakeArtProps> = (({ circle1Ref, circle2Ref, circle3Ref }) => {

	return (
		<div className={cn(styles.awake__art, styles.awake__art_1)}>
			<img src={background} className={'paralaxItem'} data-speed='2' alt="background" />
			<img src={fireflies} className={'paralaxItem'} data-speed='2' alt="fireflies" />
			<img src={art} className={'paralaxItem'} data-speed='3' alt="art" />
			<img src={neonArt05} className={'paralaxItem'} data-speed='3' alt="neonArt05" />
			<AwakeEye />
			<img src={neonArt01} className={cn('paralaxItem', styles.awake__pulse_1)} data-speed='3' alt="neonArt01" />
			<img src={neonArt02} className={cn('paralaxItem', styles.awake__pulse_2)} data-speed='3' alt="neonArt02" />
			<img src={neonArt03} className={cn('paralaxItem', styles.awake__pulse_3)} data-speed='3' alt="neonArt03" />
			<img src={neonArt04} className={cn('paralaxItem', styles.awake__pulse_4)} data-speed='3' alt="neonArt04" />
			<img src={track} className={cn('paralaxItem', styles.awake__pulse_5)} data-speed='3' alt="track" />
			<img src={neon01} className={'paralaxItem'} data-speed='2' alt="neon01" />
			<img src={neon02} className={'paralaxItem'} data-speed='2' alt="neon02" />
			<img src={neon03} className={'paralaxItem'} data-speed='2' alt="neon03" />
			<img src={city} className={'paralaxItem'} data-speed='2' alt="city" />
			<img src={girl} className={'paralaxItem'} data-speed='3' alt="girl" />
			<img src={wheels} className={cn('paralaxItem', styles.awake__pulse_6)} data-speed='3' alt="wheels" />
			<img src={noise} alt="noise" />
			<div className={cn('paralaxItem', styles.awake__droid)} data-speed='3' >
				<div className={styles.awake__animateDroid}>
					<img src={droid} alt="droid" />
				</div>
			</div>
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

export default FirstAwakeArt
