import { useState } from "react";
import { IMAGES, VIDEOS } from ".";
import { isIOS } from "../../hooks/isIOS";

export const useImageLoader = () => {


	const imgArray = Object.values(IMAGES).map(el => Object.values(el)).join().split(',');
	const videosArray = Object.values(VIDEOS);
	let loadedCounter: number[] = []
	const [progress, setProgress] = useState(0)


	const updateProgress = () => {
		if (loadedCounter !== undefined) {
			loadedCounter.push(1)
			setProgress((loadedCounter.length) / (imgArray.length + videosArray.length) * 100)
		} else {
			console.log('!loadedCounter');
			setProgress(100)
		}
	}

	const loadImage = (image: any, index: number) => {
		return new Promise((resolve, reject) => {
			const loadImg = new Image()
			loadImg.onload = () => {
				updateProgress()
				resolve(loadImg)
			}
			loadImg.onerror = err => reject(err)
			loadImg.src = image.src || image
		})
	}

	const loadVideo = (video: any) => {

		if (isIOS()) {
			updateProgress()
			return
		}
		return new Promise((resolve, reject) => {
			const loadVideo = document.createElement("video");
			loadVideo.setAttribute("src", video.src || video);
			loadVideo.onloadeddata = () => {
				updateProgress()
				resolve(loadVideo)
			}
			// loadVideo.src = video.src || video;
			loadVideo.onerror = err => reject(err)
			console.log('loadVideo');
		})
	}

	const imageLoader = async () => {
		await Promise.all(imgArray.map((image, index) => loadImage(image, index)))
			// .then(res => console.log('res', res))
			.catch(err => {
				// console.log('imageLoader err');
				// console.log("Failed to load images", err)
				// loadedCounter = undefined
				updateProgress()
			})
			.finally(() => {
				// console.log('imageLoader finally');
			})
	}

	const videosLoader = async () => {
		await Promise.all(videosArray.map((video) => loadVideo(video)))
			// .then(res => console.log('res', res))
			.catch(err => {
				// console.log('videosLoader err');
				// console.log("Failed to load images", err)
				// loadedCounter = undefined
				updateProgress()
			})
			.finally(() => {
				// console.log('videosLoader finally');
			})
	}
	const loadAll = async () => {
		await imageLoader()
		await videosLoader()
		setProgress(100)
	}
	return { loadAll, progress }
}

