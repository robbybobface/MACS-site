import * as React from "react";
const HexagonIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={"100%"}
		height={"100%"}
		viewBox='0 0 182 158'
		preserveAspectRatio='xMidYMid meet'
		fill='none'
		{...props}>
		<g filter='url(#c)' shapeRendering='crispEdges'>
			<path fill='#323232' fillOpacity={0.6} d='M47.888 0h86.603l43.301 75-43.301 75H47.888l-43.3-75 43.3-75Z' />
			<path fill='#70828F' fillOpacity={0.83} d='M47.301 0h86.603l43.301 75-43.301 75H47.301L4 75 47.301 0Z' />
			<path stroke='#111' strokeWidth={8} d='M131.594 146H50.198L9.206 75 50.198 4h81.396l40.992 71-40.992 71Z' />
		</g>
		<g filter='url(#d)' shapeRendering='crispEdges'>
			<circle cx={90.5} cy={74.5} r={27.5} fill='#0087B1' fillOpacity={0.5} />
			<circle cx={90.5} cy={74.5} r={25} stroke='#111' strokeWidth={5} />
		</g>
		<defs>
			<filter
				id='c'
				width={"auto"}
				height={"auto"}
				x={0}
				y={0}
				colorInterpolationFilters='sRGB'
				filterUnits='userSpaceOnUse'>
				<feFlood floodOpacity={0} result='BackgroundImageFix' />
				<feColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2='hardAlpha' operator='out' />
				<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
				<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_503_1164' />
				<feBlend in='SourceGraphic' in2='effect1_dropShadow_503_1164' result='shape' />
			</filter>
			<filter
				id='d'
				width={"auto"}
				height={"auto"}
				x={59}
				y={47}
				colorInterpolationFilters='sRGB'
				filterUnits='userSpaceOnUse'>
				<feFlood floodOpacity={0} result='BackgroundImageFix' />
				<feColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2='hardAlpha' operator='out' />
				<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
				<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_503_1164' />
				<feBlend in='SourceGraphic' in2='effect1_dropShadow_503_1164' result='shape' />
			</filter>
		</defs>
	</svg>
);
export default HexagonIcon;
