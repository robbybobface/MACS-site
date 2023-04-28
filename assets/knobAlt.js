import * as React from "react";

function DialLogoAlt(props) {
	return (
		<svg width={219} height={219} viewBox='0 0 219 219' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g filter='url(#filter10_d_31_2201)'>
				<circle cx={109.5} cy={74.5} r={59.5} fill='url(#paint10_linear_31_2201)' />
				<circle cx={109.5} cy={74.5} r={58} stroke='url(#paint11_linear_31_2201)' strokeWidth={3} />
			</g>
			<g filter='url(#filter11_i_31_2201)'>
				<circle cx={134.49} cy={49.51} r={9.52} fill='#4E4E4E' />
			</g>
			<defs>
				<filter
					id='filter10_d_31_2201'
					x={0}
					y={0}
					width={219}
					height={219}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy={35} />
					<feGaussianBlur stdDeviation={25} />
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0' />
					<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_31_2201' />
					<feBlend in='SourceGraphic' in2='effect1_dropShadow_31_2201' result='shape' />
				</filter>
				<filter
					id='filter11_i_31_2201'
					x={124.97}
					y={39.99}
					width={19.04}
					height={31.04}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy={12} />
					<feGaussianBlur stdDeviation={10} />
					<feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0' />
					<feBlend in2='shape' result='effect1_innerShadow_31_2201' />
				</filter>
				<linearGradient
					id='paint10_linear_31_2201'
					x1={109.5}
					y1={15}
					x2={109.5}
					y2={134}
					gradientUnits='userSpaceOnUse'>
					<stop stopColor='#4B4B4B' />
					<stop offset={1} stopColor='#202020' />
				</linearGradient>
				<linearGradient
					id='paint11_linear_31_2201'
					x1={109.5}
					y1={15}
					x2={109.5}
					y2={134}
					gradientUnits='userSpaceOnUse'>
					<stop stopColor='#606060' />
					<stop offset={1} stopColor='#0E0E0E' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default DialLogoAlt;
