import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { observer } from 'mobx-react'
import { FC, useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import styles from '../../styles/aboutSection.module.scss'
import { mouseMoveHandler } from '../../utils/helpers'
import AboutCollection from './AboutCollection'

gsap.registerPlugin(ScrollTrigger)

interface SecondPageProps {
	SecondArt: any
}

const SecondSection: FC<SecondPageProps> = observer(({ SecondArt }) => {

	const { scroll } = useLocomotiveScroll()
	const aboutCollectionRef = useRef(null)
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

		ScrollTrigger.defaults({ scroller: scroll.el, })

		const tl2 = gsap.timeline()

		ScrollTrigger.matchMedia({
			'(min-width: 991.98px)': function () {
				tl2.to([circle1Ref.current, circle2Ref.current, circle3Ref.current], {
					scrollTrigger: {
						trigger: sectionRef.current,
						end: `+=80%`,
						scrub: 1,
						pin: true,
					},
					r: '80%',
					ease: "none",
					// duration: 10,
				}).to(aboutCollectionRef.current, {
					scrollTrigger: {
						trigger: aboutCollectionRef.current,
						start: '80% 50%',
						end: `80% 50%`,
						scrub: 3,
					},
					y: -100,
					opacity: 0,
					ease: "ease",
					duration: 2,
				})
			}
		})

		return () => {
			tl2.kill()
		}

	}, [scroll])

	return (
		<div id='second'>
			<section className={styles.aboutSection} ref={sectionRef}>
				<div className={styles.aboutSection__art}>
					<SecondArt circle1Ref={circle1Ref} circle2Ref={circle2Ref} circle3Ref={circle3Ref} />
				</div>
				<div className={styles.aboutSection__info}>
					<AboutCollection aboutCollectionRef={aboutCollectionRef} />
				</div>
			</section>
		</div>
	)
})

export default SecondSection
