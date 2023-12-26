import { FC, RefObject, useEffect, useState } from 'react'
// styles
import styles from '../../styles/firstStep.module.scss'
import { getRandomIntInclusive } from '../../utils/utilities'


interface FirstStepProps {
	mainTitleRef: RefObject<HTMLDivElement>
}

const FirstStep: FC<FirstStepProps> = (({ mainTitleRef }) => {


	const [firstDigi, setFirstDigi] = useState<number | null>(null)
	const [secondDigi, setSecondDigi] = useState<number | null>(null)

	useEffect(() => {
		setFirstDigi(getRandomIntInclusive(0, 'MORPHEUS'.length - 1))
		setSecondDigi(getRandomIntInclusive(0, 'MORPHEUS'.length - 1))
	}, [])


	return (
		<div className={`${styles.firstStep} paralaxItem`} data-speed='2' ref={mainTitleRef}>
			<div className={styles.firstStep__body}>
				<div className={styles.firstStep__title}>
					{'MORPHEUS'.split('').map((letter, index) => {
						const classList = index === firstDigi || index === secondDigi ? 'nostra' : '';
						return <span key={letter} className={classList}>{letter}</span>
					})}
				</div>
				<div className={styles.firstStep__subtitle}>Сhoose your side</div>
			</div>
		</div>
	)
})

export default FirstStep