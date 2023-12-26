import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { observer } from 'mobx-react'
import { FC, MutableRefObject, useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import styles from '../../styles/aboutSection.module.scss'
import { TeamItem } from '../../types/ourTeam'
import OurTeam from '../OurTeam'

gsap.registerPlugin(ScrollTrigger)

interface ThirdSectionProps {
	OurTeamList: TeamItem[]
	teamItem1Ref: MutableRefObject<HTMLDivElement | null>
	teamItem2Ref: MutableRefObject<HTMLDivElement | null>
	teamItem3Ref: MutableRefObject<HTMLDivElement | null>
	teamItem4Ref: MutableRefObject<HTMLDivElement | null>
}


const ThirdSection: FC<ThirdSectionProps> = observer(({ OurTeamList, teamItem1Ref, teamItem2Ref, teamItem3Ref, teamItem4Ref }) => {

	const { scroll } = useLocomotiveScroll()
	const teamTitlenRef = useRef<HTMLHeadingElement>(null)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!scroll) return
		const refList = [teamItem1Ref.current, teamItem2Ref.current, teamItem3Ref.current, teamItem4Ref.current]

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

		const tl = gsap.timeline()

		ScrollTrigger.matchMedia({
			'(min-width: 991.98px)': function () {
				tl.to(teamTitlenRef.current, {
					scrollTrigger: {
						trigger: sectionRef.current,
						end: `+=80%`,
						scrub: 1,
						pin: true,
					},
					top: '20%',
					ease: "none",
					duration: 3,
				})

				for (let i = 0; i < refList.length; i++) {
					tl.to(refList[i], {
						scrollTrigger: {
							trigger: sectionRef.current,
							end: '+=110%',
							scrub: i + 1,
							pin: true,
						},
						y: '0%',
						opacity: 1,
						ease: "ease",
						duration: 1,
					})
				}
			}
		})

		return () => { tl.kill() }

	}, [scroll])

	return (
		<div id='ourTeam'>
			<section className={styles.aboutSection} ref={sectionRef}>
				<div className={styles.aboutSection__body}>
					<OurTeam OurTeamList={OurTeamList} teamTitlenRef={teamTitlenRef} />
				</div>
			</section>
		</div>
	)
})

export default ThirdSection
