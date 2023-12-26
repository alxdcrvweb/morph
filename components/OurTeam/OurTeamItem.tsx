import cn from 'classnames';
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from '../../styles/ourTeam.module.scss';
import { TeamItem, TeamItemSocial } from "../../types/ourTeam";

interface OurTeamItemProps {
	item: TeamItem
}

const OurTeamItem: FC<OurTeamItemProps> = ({ item }) => {

	const router = useRouter();
	const routerPath = router.asPath.split(/[#]/)[0];
	const { image, name, text, socials, mobileText } = item

	return (
		<div className={styles.ourTeam__item} ref={item.ref}>
			<div className={styles.ourTeam__image}>
				<img src={image} alt='' />
			</div>
			<div className={styles.ourTeam__content}>
				<div className={styles.ourTeam__name}>
					{name}
				</div>
				<div className={styles.ourTeam__text}>
					<p>{text()}</p>
					<p>{mobileText()}</p>
				</div>
				{socials.length > 0 &&
					<div className={styles.ourTeam__socials}>
						{socials.map((social: TeamItemSocial) =>
							<a href={social.link} target='_blank' rel="noreferrer" key={social.id} className={
								cn(
									styles.ourTeam__social,
									routerPath === '/awake' ? styles.ourTeam__social_awake :
										routerPath === '/sleeping' ? styles.ourTeam__social_sleeping : ''
								)
							}>
								{social.icon()} {social.nick}
							</a>
						)}
					</div>
				}
			</div>
		</div>

	)
}


export default OurTeamItem