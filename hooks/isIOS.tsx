export const isIOS = () => {
  try {
    const isIOS = /iPad|iPhone|iPod/.test(navigator?.userAgent);
    const isAppleDevice = navigator?.userAgent.includes("Macintosh");
    const isTouchScreen = navigator?.maxTouchPoints >= 1; // true for iOS 13 (and hopefully beyond)

    return isIOS || (isAppleDevice && isTouchScreen);
  } catch (e) {
    console.log(e);
	return false
  }
};
