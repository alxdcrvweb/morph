import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { observer } from 'mobx-react'
import { FC, MouseEvent, useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import scrollUp from '../../public/icons/scroll_up.svg'
import styles from '../../styles/aboutSection.module.scss'
import { mouseMoveHandler } from '../../utils/helpers'
import HelperBottomModal from '../HelperBottomModal'
import FirstStep from '../FirstSection/FirstStep'


gsap.registerPlugin(ScrollTrigger)

interface FirstSectionProps {
	FirstArt: any
}

const ChoseSection: FC<FirstSectionProps> = observer(({ FirstArt }) => {

	const { scroll } = useLocomotiveScroll()
	const mainTitleRef = useRef(null)
	const helpingRef = useRef<HTMLDivElement>(null)
	const sectionRef = useRef<HTMLElement>(null)
	const circle1Ref = useRef(null)
	const circle2Ref = useRef(null)
	const circle3Ref = useRef(null)

	const mouseHandler = (e: globalThis.MouseEvent) => {
		mouseMoveHandler(e, sectionRef)
	}

	useEffect(() => {
		sectionRef.current?.addEventListener('mousemove', mouseHandler)
		return () => sectionRef.current?.removeEventListener('mousemove', mouseHandler)
	}, [])


	useEffect(() => {
		if (!scroll) return

		ScrollTrigger.scrollerProxy(scroll.el, {
			scrollTop(value) {
				return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
			},
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			},
			pinType: scroll.el!.style.transform ? "transform" : "fixed"
		});

		ScrollTrigger.defaults({ scroller: scroll.el })

		const tl1 = gsap.timeline()

		ScrollTrigger.matchMedia({
			'(min-width: 991.98px)': function () {
				tl1.to([circle1Ref.current, circle2Ref.current, circle3Ref.current], {
					scrollTrigger: {
						trigger: sectionRef.current,
						end: `+=600`,
						scrub: 1,
						pin: true,
					},
					r: '80%',
					ease: "none",
					duration: 10,
				})
			}
		})

		return () => { tl1.kill() }

	}, [scroll])

	return (
		<div id='first'>
			<section className={styles.aboutSection} ref={sectionRef} >
				<FirstArt circle1Ref={circle1Ref} circle2Ref={circle2Ref} circle3Ref={circle3Ref} />
				<FirstStep mainTitleRef={mainTitleRef} />
				
			</section >
		</div>
	)
})

export default ChoseSection
