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
  // 		{S
  images: {
    domains: ["ipfs.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  env: {
    NEYNAR_API_KEY: process.env.NEYNAR_API_KEY,
  },
};
