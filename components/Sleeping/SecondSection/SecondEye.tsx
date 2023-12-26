import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'
// styles
import styles from '../../../styles/sleeping.module.scss'



interface SecondEyeProps {
}

const SecondEye: FC<SecondEyeProps> = (({ }) => {

	const router = useRouter()

	return (
		<div className={cn(styles.sleepingEye, styles.sleepingEye_second, 'paralaxItem', 'eye')} data-speed='0.5'>
			<svg onClick={() => router.push('/awake')} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 285.55 212.05" enableBackground="new 0 0 285.55 212.05" xmlSpace="preserve">
				<radialGradient
					id="shadow_x5F_back_00000012469470613687171050000006543214219055088265_"
					cx="142.7464"
					cy="120.7101"
					r="150.4051"
					gradientTransform="matrix(0.9738 0 0 0.8923 3.772 17.8169)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0.0354" style={{ stopColor: '#587A87', stopOpacity: '0.5' }} />
					<stop offset="0.139" style={{ stopColor: '#597C88', stopOpacity: '0.4561' }} />
					<stop offset="0.6059" style={{ stopColor: '#68949C', stopOpacity: '0.1914' }} />
					<stop offset="0.9436" style={{ stopColor: '#6FA0A6', stopOpacity: '0' }} />
				</radialGradient>
				<path id="shadow_x5F_back" style={{ fill: 'url(#shadow_x5F_back_00000012469470613687171050000006543214219055088265_)' }} d="
M274.24,121.09c-11.06-13.17-35.39-39.46-66.87-57.58c-0.05-0.03-0.11-0.07-0.17-0.1c-1.12-0.7-2.24-1.38-3.38-2.05
c-2.05-1.21-4.13-2.39-6.25-3.53c-1.2-0.64-2.42-1.28-3.64-1.89c-2.22-1.12-4.48-2.18-6.76-3.19c-1.35-0.6-2.71-1.18-4.08-1.73
c-2.58-1.04-5.19-1.99-7.84-2.86c-1.66-0.55-3.33-1.06-5.02-1.53c-3.71-1.04-7.48-1.9-11.3-2.55c-4.6-0.78-9.28-1.23-14.02-1.34
c-0.71-0.02-1.42-0.04-2.14-0.04c-0.71,0-1.43,0.02-2.14,0.04c-4.74,0.11-9.41,0.57-14.02,1.34c-3.82,0.64-7.59,1.5-11.3,2.55
c-1.68,0.47-3.36,0.98-5.02,1.53c-2.65,0.87-5.26,1.82-7.84,2.86c-1.37,0.55-2.73,1.13-4.08,1.73c-2.28,1.01-4.54,2.07-6.76,3.19
c-1.22,0.62-2.44,1.25-3.64,1.89c-2.12,1.13-4.2,2.31-6.24,3.53c-1.14,0.67-2.27,1.36-3.38,2.05c-0.06,0.03-0.11,0.07-0.17,0.1
c-31.48,18.12-55.82,44.4-66.87,57.58c-1.42,1.69-2.65,3.2-3.62,4.41c0.01,0.01,0.01,0.02,0.02,0.03c0.98,1.22,2.21,2.73,3.64,4.43
c10.94,13.03,34.8,38.79,65.7,56.86c0.43,0.28,0.87,0.55,1.31,0.82c1.12,0.7,2.24,1.38,3.38,2.05c2.05,1.21,4.13,2.39,6.25,3.53
c1.2,0.64,2.42,1.28,3.64,1.89c2.22,1.12,4.48,2.18,6.77,3.19c1.35,0.6,2.71,1.18,4.08,1.73c2.58,1.04,5.2,1.99,7.85,2.86
c1.66,0.55,3.34,1.06,5.02,1.53c3.72,1.04,7.5,1.9,11.33,2.55c4.82,0.81,9.72,1.27,14.69,1.34c0.47,0.01,0.93,0.02,1.4,0.02
s0.93-0.02,1.4-0.02c4.97-0.07,9.87-0.53,14.69-1.34c3.83-0.64,7.61-1.51,11.33-2.55c1.69-0.47,3.36-0.98,5.02-1.53
c2.65-0.87,5.27-1.82,7.85-2.86c1.37-0.55,2.73-1.13,4.08-1.73c2.29-1.01,4.54-2.07,6.77-3.19c1.22-0.62,2.44-1.25,3.64-1.89
c2.12-1.13,4.2-2.31,6.25-3.53c1.14-0.67,2.27-1.36,3.38-2.05c0.36-0.22,0.72-0.45,1.08-0.68c31.01-18.08,54.96-43.94,65.93-57.01
c1.43-1.7,2.66-3.21,3.64-4.43c0.01-0.01,0.01-0.02,0.02-0.03C276.89,124.28,275.66,122.78,274.24,121.09z"/>
				<pattern id="pupil" patternUnits="userSpaceOnUse" x="0" y="0" width="341" height="341">
					<g className={cn('pupil')}>
						<radialGradient id="SVGID_1_" cx="143.5187" cy="132.9108" r="46.5244" gradientTransform="matrix(0.9653 0 0 0.9653 4.2357 -2.7762)" gradientUnits="userSpaceOnUse">
							{/* <stop offset="0.5059" style={{ stopColor: 'rgba(123,221,245,0.7)' }} />
							<stop offset="0.5318" style={{ stopColor: '#68E2E6', stopOpacity: '0.9164' }} />
							<stop offset="0.5838" style={{ stopColor: '#89E6EE', stopOpacity: '0.749' }} />
							<stop offset="0.6374" style={{ stopColor: '#A2E9F4', stopOpacity: '0.5762' }} /> */}
							<stop offset="0.6927" style={{ stopColor: '#B5EBF8', stopOpacity: '0.3979' }} />
							<stop offset="0.7509" style={{ stopColor: '#BFEDFB', stopOpacity: '0.2107' }} />
							<stop offset="0.8162" style={{ stopColor: '#C3EDFC', stopOpacity: '0' }} />
						</radialGradient>
						<circle
							fill='url(#SVGID_1_)'
							cx="142.77"
							cy="125.52"
							r="55.36"
						/>

						<radialGradient id="SVGID_00000132792992251726690520000007752592351272706493_" cx="142.7733" cy="125.5217" r="66.8331" gradientUnits="userSpaceOnUse">
							<stop offset="0.8808" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
							<stop offset="0.9418" style={{ stopColor: '#FFFFFF', stopOpacity: 0.25 }} />
							<stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
						</radialGradient>
						<circle style={{ fill: 'url(#SVGID_00000132792992251726690520000007752592351272706493_)' }} cx="142.77" cy="125.52" r="66.83" />

						<radialGradient id="SVGID_00000053530368969873292090000002441793183443684250_" cx="142.7733" cy="125.5217" r="49.993" gradientUnits="userSpaceOnUse">
							<stop offset="0.8467" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
							<stop offset="0.9277" style={{ stopColor: '#FFFFFF', stopOpacity: 0.25 }} />
							<stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
						</radialGradient>
						<circle style={{ fill: 'url(#SVGID_00000053530368969873292090000002441793183443684250_)' }} cx="142.77" cy="125.52" r="49.99" />

						<radialGradient id="SVGID_00000007402983268650317750000010300153700429052576_" cx="142.7733" cy="125.5217" r="83.5967" gradientUnits="userSpaceOnUse">
							<stop offset="0.8996" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
							<stop offset="0.9509" style={{ stopColor: '#FFFFFF', stopOpacity: 0.25 }} />
							<stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
						</radialGradient>
						<circle style={{ fill: 'url(#SVGID_00000007402983268650317750000010300153700429052576_)' }} cx="142.77" cy="125.52" r="83.6" />
					</g>
				</pattern>
				<linearGradient id="shadow_x5F_eye_00000174580525998787056840000006715903276981941155_" gradientUnits="userSpaceOnUse" x1="141.4999" y1="29.991" x2="143.9648" y2="214.8579">
					<stop offset="0.0966" style={{ stopColor: '#587A86', stopOpacity: 0.7 }} />
					<stop offset="0.288" style={{ stopColor: '#587A86', stopOpacity: 0 }} />
					<stop offset="0.7474" style={{ stopColor: '#587A86', stopOpacity: 0 }} />
					<stop offset="0.9402" style={{ stopColor: '#587A86', stopOpacity: 0.7 }} />
				</linearGradient>
				<path id="shadow_x5F_eye" style={{ fill: 'url(#shadow_x5F_eye_00000174580525998787056840000006715903276981941155_)' }} d="
M280.17,121.15c-11.55-12.98-36.99-38.9-69.89-56.76c-0.06-0.03-0.12-0.07-0.17-0.1c-1.17-0.69-2.35-1.36-3.54-2.02
c-2.14-1.2-4.32-2.36-6.53-3.48c-1.26-0.64-2.52-1.26-3.8-1.86c-2.32-1.1-4.68-2.15-7.07-3.14c-1.41-0.59-2.83-1.16-4.26-1.7
c-2.69-1.02-5.43-1.96-8.2-2.82c-1.73-0.54-3.48-1.04-5.24-1.51c-3.88-1.03-7.82-1.87-11.81-2.51c-4.81-0.76-9.7-1.22-14.65-1.32
c-0.74-0.02-1.49-0.04-2.23-0.04c-0.75,0-1.49,0.02-2.23,0.04c-4.95,0.11-9.84,0.56-14.65,1.32c-4,0.63-7.93,1.48-11.81,2.51
c-1.76,0.47-3.51,0.97-5.24,1.51c-2.77,0.86-5.5,1.8-8.2,2.82c-1.43,0.54-2.85,1.12-4.26,1.7c-2.39,0.99-4.75,2.04-7.07,3.14
c-1.28,0.61-2.55,1.23-3.8,1.86c-2.21,1.12-4.39,2.28-6.53,3.48c-1.19,0.66-2.37,1.34-3.54,2.02c-0.06,0.03-0.12,0.07-0.17,0.1
c-32.9,17.86-58.33,43.77-69.89,56.76c-1.49,1.67-2.77,3.15-3.78,4.35c0.01,0.01,0.02,0.02,0.02,0.03c1.02,1.2,2.31,2.69,3.81,4.37
c11.44,12.84,36.37,38.24,68.66,56.06c0.45,0.27,0.91,0.54,1.37,0.81c1.17,0.69,2.35,1.36,3.53,2.02c2.14,1.2,4.32,2.36,6.53,3.48
c1.26,0.64,2.53,1.26,3.81,1.86c2.32,1.1,4.68,2.15,7.07,3.14c1.41,0.59,2.83,1.16,4.27,1.7c2.7,1.02,5.43,1.96,8.2,2.82
c1.74,0.54,3.49,1.04,5.25,1.51c3.89,1.03,7.84,1.88,11.84,2.51c5.04,0.8,10.16,1.25,15.35,1.32c0.49,0.01,0.98,0.02,1.46,0.02
c0.49,0,0.98-0.02,1.46-0.02c5.19-0.07,10.32-0.53,15.35-1.32c4-0.63,7.95-1.48,11.84-2.51c1.76-0.47,3.51-0.97,5.25-1.51
c2.77-0.86,5.5-1.79,8.2-2.82c1.43-0.54,2.86-1.12,4.27-1.7c2.39-0.99,4.75-2.04,7.07-3.14c1.28-0.61,2.55-1.23,3.81-1.86
c2.21-1.12,4.39-2.28,6.53-3.48c1.19-0.66,2.37-1.34,3.53-2.02c0.38-0.22,0.75-0.44,1.13-0.67c32.41-17.82,57.44-43.32,68.9-56.2
c1.49-1.68,2.78-3.17,3.8-4.37c0.01-0.01,0.02-0.02,0.02-0.03C282.94,124.3,281.65,122.82,280.17,121.15z"/>
				<g id="body">
					<g id="points">

						<radialGradient id="SVGID_00000174587095900451792510000015967159726217404837_" cx="141.9915" cy="17.3428" r="16.7499" gradientTransform="matrix(0.9882 0 0 0.9284 1.9511 0.19)" gradientUnits="userSpaceOnUse">
							<stop offset="0.4328" style={{ stopColor: 'rgba(123,221,245,0.7)' }} />
							<stop offset="0.4942" style={{ stopColor: '#73E4E8', stopOpacity: 0.8845 }} />
							<stop offset="0.5694" style={{ stopColor: '#90E7EF', stopOpacity: 0.7434 }} />
							<stop offset="0.6496" style={{ stopColor: '#A6EAF5', stopOpacity: 0.5926 }} />
							<stop offset="0.7363" style={{ stopColor: '#B7ECF9', stopOpacity: 0.4299 }} />
							<stop offset="0.8338" style={{ stopColor: '#C0EDFB', stopOpacity: 0.2467 }} />
							<stop offset="0.9651" style={{ stopColor: '#C3EDFC', stopOpacity: 0 }} />
						</radialGradient>

						<ellipse style={{ fill: 'url(#SVGID_00000174587095900451792510000015967159726217404837_)' }} cx="142.27" cy="16.29" rx="16.5" ry="15.5" />

						<radialGradient id="SVGID_00000081639247264675217080000010638236453781850302_" cx="213.6916" cy="40.8502" r="16.7499" gradientTransform="matrix(0.9882 0 0 0.9284 2.0939 0.3669)" gradientUnits="userSpaceOnUse">
							<stop offset="0.4328" style={{ stopColor: 'rgba(123,221,245,0.7)' }} />
							<stop offset="0.4942" style={{ stopColor: '#73E4E8', stopOpacity: 0.8845 }} />
							<stop offset="0.5694" style={{ stopColor: '#90E7EF', stopOpacity: 0.7434 }} />
							<stop offset="0.6496" style={{ stopColor: '#A6EAF5', stopOpacity: 0.5926 }} />
							<stop offset="0.7363" style={{ stopColor: '#B7ECF9', stopOpacity: 0.4299 }} />
							<stop offset="0.8338" style={{ stopColor: '#C0EDFB', stopOpacity: 0.2467 }} />
							<stop offset="0.9651" style={{ stopColor: '#C3EDFC', stopOpacity: 0 }} />
						</radialGradient>

						<ellipse style={{ fill: 'url(#SVGID_00000081639247264675217080000010638236453781850302_)' }} cx="213.27" cy="38.29" rx="16.5" ry="15.5" />

						<radialGradient id="SVGID_00000167375181644843161520000010697289053482704276_" cx="71.855" cy="40.8502" r="16.7499" gradientTransform="matrix(0.9882 0 0 0.9284 1.2631 0.3669)" gradientUnits="userSpaceOnUse">
							<stop offset="0.4328" style={{ stopColor: 'rgba(123,221,245,0.7)' }} />
							<stop offset="0.4942" style={{ stopColor: '#73E4E8', stopOpacity: 0.8845 }} />
							<stop offset="0.5694" style={{ stopColor: '#90E7EF', stopOpacity: 0.7434 }} />
							<stop offset="0.6496" style={{ stopColor: '#A6EAF5', stopOpacity: 0.5926 }} />
							<stop offset="0.7363" style={{ stopColor: '#B7ECF9', stopOpacity: 0.4299 }} />
							<stop offset="0.8338" style={{ stopColor: '#C0EDFB', stopOpacity: 0.2467 }} />
							<stop offset="0.9651" style={{ stopColor: '#C3EDFC', stopOpacity: 0 }} />
						</radialGradient>

						<ellipse style={{ fill: 'url(#SVGID_00000167375181644843161520000010697289053482704276_)' }} cx="72.27" cy="38.29" rx="16.5" ry="15.5" />
					</g>
					<path
						fill='url(#pupil)'
						stroke='rgba(123,221,245,0.7)'
						strokeWidth='7'
						strokeLinejoin='round'
						strokeMiterlimit='10'
						// style={{ filter: 'drop-shadow("0 0 20px #C3EDFC")' }}
						d="M177.1,47.84c51.27,15.16,91.41,59.35,103.14,73.36c2.11,2.52,2.11,6.12,0,8.64
				c-14.25,17.02-70.39,78.53-137.47,78.53c-67.08,0-123.22-61.51-137.47-78.53c-2.11-2.52-2.11-6.12,0-8.64
  c14.25-17.02,70.39-78.53,137.47-78.53C154.61,42.67,166.11,44.59,177.1,47.84"/>
				</g>
			</svg>
		</div>
	)
})

export default SecondEye

// rgb(123 221 245 / 70%)
// rgba(123,221,245,0.7)

// #55E0E1 => rgba(123,221,245,0.7)