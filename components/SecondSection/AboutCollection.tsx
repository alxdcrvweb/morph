import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { FC, RefObject } from 'react'
import styles from '../../styles/aboutCollection.module.scss'
import cn from 'classnames'


interface AboutCollectionProps {
	aboutCollectionRef: RefObject<HTMLDivElement>
}


const AboutCollection: FC<AboutCollectionProps> = observer(({ aboutCollectionRef }) => {

	const router = useRouter()

	const handleClick = () => {
		router.asPath === '/sleeping' || router.asPath === '/sleeping1' ? router.push('/awake') :
			router.asPath === '/awake' ? router.push('/sleeping') : ''
	}


	return (
		<div className={styles.aboutCollection} ref={aboutCollectionRef}>
			<div className={cn(styles.aboutCollection__container, '_container')}>
				<h2 className={styles.aboutCollection__title}>About <br /> collection</h2>
				<div className={styles.aboutCollection__text}>
					<p>NFT collection <a href='https://www.britannica.com/topic/Morpheus-Greek-mythology' target='_blank' rel="noreferrer">MORPHEUS</a> -  characters with unique hand-drawn features in a mystical sci-fi setting.</p>
					<p>Detailed lore, deep storytelling and ARG-elements grant you  a one-of-a-kind immersive experience.</p>
					<p>
						You have to choose your side. <br />
						Sleep is a source of power.
					</p>
					<p onClick={handleClick}>
						{router.asPath === '/awake' && 'Sleep tight'}
						{router.asPath === '/sleeping' && 'Keep vigil'}
					</p>
				</div>
			</div>
		</div>
	)
})

export default AboutCollection
