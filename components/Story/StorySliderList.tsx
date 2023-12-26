
import { observer } from 'mobx-react';
import Image from 'next/image';
import { FC } from 'react';
import "swiper/css";
import "swiper/css/effect-fade";
import styles from '../../styles/story.module.scss';

interface StorySliderListProps {
	tokensList: string[]
}

const StorySliderList: FC<StorySliderListProps> = observer(({ tokensList }) => {

	// const { tokensList, getTokens } = useInjection(UserStore)

	return (
		<div className={styles.story__nfts}>
			{tokensList.map((image: string, index: number) => (
				<div key={image + index} className={styles.story__nft}>
					{/* <Image src={image.replace("ipfs://", "https://ipfs.io/ipfs/1")} blurDataURL={image.replace("ipfs://", "https://ipfs.io/ipfs/")} placeholder='blur' width={60} height={60} objectFit='cover' objectPosition={'center'} alt="" /> */}
					<Image src={image.replace("ipfs://", "https://ipfs.io/ipfs/")} blurDataURL='/testNft.webp' placeholder='blur' width={60} height={60} objectFit='cover' objectPosition={'center'} alt="" />
				</div>
			))}
		</div>
	)
})

export default StorySliderList;
