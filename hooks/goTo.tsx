import { useRouter } from "next/router"
import { useState } from "react"


export const GoTo = () => {

	const router = useRouter()
	const [nextUrl, setNextUrl] = useState('')
	const [prevPath, setPrevPath] = useState('')


	const goToHash = (href: string, timeout: number = 1000, callback?: () => void) => {
		if (callback) callback()
		setNextUrl(href.split(/[/]|[#]/)[1])
		setPrevPath(router.asPath.split(/[/]|[#]/)[1])
		setTimeout(() => {
			// router.push(`${href}${window.location.hash ? `${window.location.hash}` : ''}`)
			router.push(href + window.location.hash)
		}, timeout);
	}


	const goToSlash = (href: string, timeout: number = 1000, callback?: () => void) => {
		if (callback) callback()
		setNextUrl(href.split(/[/]|[#]/)[1]);
		setPrevPath(router.asPath.split(/[/]|[#]/)[1]);
		setTimeout(() => {
			router.push(href)
		}, timeout);
	}

	return { goToHash, goToSlash, nextUrl, prevPath }
}
