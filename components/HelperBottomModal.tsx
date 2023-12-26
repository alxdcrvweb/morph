import Image from 'next/image'
import { FC, RefObject } from 'react'
interface HelperBottomModalProps {
	text: string,
	mobileText?: string,
	image: string,
	mobileImage?: string,
	scroll?: boolean
	helpingRef: RefObject<HTMLDivElement>
}

const HelperBottomModal: FC<HelperBottomModalProps> = (({ text, mobileText, image, mobileImage, scroll, helpingRef }) => {

	return (
		<div ref={helpingRef} className={`bottomModal ${scroll ? 'bottomModal_scroll' : 'bottomModal_secondModal'} `}>
			{mobileText ?
				<div className='bottomModal__text bottomModal__text_mobile'>
					<span>{text}</span>
					<span>{mobileText}</span>
				</div> :
				<div className='bottomModal__text'>{text}</div>
			}

			{mobileImage ?
				<div className='bottomModal__icon bottomModal__icon_mobile'>
					<Image src={image} alt='bottom modal icon' width={32} height={64} />
					{/* <Image src={image} alt='bottom modal icon' width={32} height={32} /> */}
					<Image src={mobileImage} alt='bottom modal icon' width={32} height={32} />
				</div> :
				<div className='bottomModal__icon'>
					<Image src={image} alt='bottom modal icon' width={32} height={64} />
					{/* <Image src={image} alt='bottom modal icon' width={32} height={32} /> */}
				</div>
			}
		</div>
	)
})

export default HelperBottomModal