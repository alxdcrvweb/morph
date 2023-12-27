/** @type {import('next').NextConfig} */
// module.exports = {
// 	reactStrictMode: true,
// 	future: {
// 		webpack5: true,
// 	},
// 	resolver: {
// 		sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
// 		assetExts: ['glb', 'png', 'jpg'],
// 	},
// }

// const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()

module.exports = {
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/',
	// 			destination: '/sleeping',
	// 			permanent: true,
	// 		},
	// 	]
	// },
	images: {
		domains: ['ipfs.io'],
	},
	// env: {
	// 	NEXT_GA_ID: 'G-SCDZ2W05BW',
	// },
}