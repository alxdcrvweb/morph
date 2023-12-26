import { useRouter } from "next/router"
import { useState, WheelEvent } from "react"
import { GoTo } from "./goTo"

export const mouseWheel = () => {

	const router = useRouter()
	const [disabled, setDisabled] = useState(false)
	const { goToHash, goToSlash, nextUrl, prevPath } = GoTo()


	const onWheelHandler = (e: WheelEvent<HTMLDivElement>) => {

		const hashNumber = +window.location.hash.slice(1);

		if (!disabled) {
			setDisabled(true)
			if (e.deltaY < 0) {
				if (window.location.hash === '') {
					// setHashNumber(1)
					window.location.hash = '1'
				} else if (hashNumber < 2) {
					window.location.hash = `${hashNumber + 1}`
				} else {
					// goToSlash(`${router.asPath.split(/[/]|[#]/)[1]}/1`)
					// return
				}
			} else if (e.deltaY > 0 && window.location.hash !== '') {
				if (hashNumber === 1) {
					window.location.hash = ''
				} else {
					window.location.hash = `${hashNumber - 1}`
				}
			}
			setTimeout(() => {
				setDisabled(false)
			}, 2000);
		}
	}

	const onSwipeHandler = (bool: boolean) => {

		const hashNumber = +window.location.hash.slice(1);

		if (!disabled) {
			setDisabled(true)
			if (bool) {
				if (window.location.hash === '') {
					window.location.hash = '1'
				} else if (hashNumber < 2) {
					window.location.hash = `${hashNumber + 1}`
				} else {
					// goToSlash(`${router.asPath.split(/[/]|[#]/)[1]}/1`)
					// return
				}
			} else if (!bool && window.location.hash !== '') {
				if (hashNumber === 1) {
					window.location.hash = ''
				} else {
					window.location.hash = `${hashNumber - 1}`
				}
			}
			setTimeout(() => {
				setDisabled(false)
			}, 2000);
		}
	}
	return { onWheelHandler, onSwipeHandler }
}
