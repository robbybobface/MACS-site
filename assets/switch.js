import * as React from "react";

function SwitchLogo(props) {
	return (
		<svg width={92} height={164} viewBox='0 0 92 164' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g filter='url(#filter0_i_31_2208)'>
				<rect x={30} width={31.0435} height={119} rx={15.5217} fill='#111' />
			</g>
			<g filter='url(#filter1_d_31_2208)'>
				<circle cx={45.5217} cy={103.478} r={15.5217} fill='url(#paint0_linear_31_2208)' />
				<circle cx={45.5217} cy={103.478} r={14.0217} stroke='url(#paint1_linear_31_2208)' strokeWidth={3} />
			</g>
			<defs>
				<filter
					id='filter0_i_31_2208'
					x={30}
					y={0}
					width={31.0439}
					height={121}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={1} />
					<feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0' />
					<feBlend in2='shape' result='effect1_innerShadow_31_2208' />
				</filter>
				<filter
					id='filter1_d_31_2208'
					x={0}
					y={72.9565}
					width={91.0439}
					height={91.0435}
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy={15} />
					<feGaussianBlur stdDeviation={15} />
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0' />
					<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_31_2208' />
					<feBlend in='SourceGraphic' in2='effect1_dropShadow_31_2208' result='shape' />
				</filter>
				<linearGradient
					id='paint0_linear_31_2208'
					x1={45.5217}
					y1={87.9565}
					x2={45.5217}
					y2={119}
					gradientUnits='userSpaceOnUse'>
					<stop stopColor='#4B4B4B' />
					<stop offset={1} stopColor='#202020' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_31_2208'
					x1={45.5217}
					y1={87.9565}
					x2={45.5217}
					y2={119}
					gradientUnits='userSpaceOnUse'>
					<stop stopColor='#606060' />
					<stop offset={1} stopColor='#0E0E0E' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default SwitchLogo;
