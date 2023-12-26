import cn from "classnames";
import { FC, MutableRefObject, useEffect, useState } from "react";
import styles from '../../styles/ourTeam.module.scss';
import { TeamItem } from "../../types/ourTeam";
import { getRandomIntInclusive } from "../../utils/utilities";
import OurTeamItem from "./OurTeamItem";

interface OurTeamProps {
	OurTeamList: TeamItem[]
	teamTitlenRef: MutableRefObject<HTMLHeadingElement | null>
}

const OurTeam: FC<OurTeamProps> = ({ OurTeamList, teamTitlenRef }) => {

	const [firstDigi, setFirstDigi] = useState<number | null>(null)
	const [secondDigi, setSecondDigi] = useState<number | null>(null)

	useEffect(() => {
		setFirstDigi(getRandomIntInclusive(0, 'OuR tEam'.length - 1))
		setSecondDigi(getRandomIntInclusive(0, 'OuR tEam'.length - 1))
	}, [])

	return (
		<div className={styles.ourTeam}>
			<h2 className={cn(styles.ourTeam__title, '_subtitle')} ref={teamTitlenRef}>
				{'OuR tEam'.split('').map((letter, index) => {
					const classList = index === firstDigi || index === secondDigi ? 'nostra' : '';
					return <span key={letter} className={classList}>{letter}</span>
				})}
			</h2>
			<div className={styles.ourTeam__list} >
				{OurTeamList.map(item => <OurTeamItem key={item.id} item={item} />)}
			</div>
		</div>
	)
}


export default OurTeam