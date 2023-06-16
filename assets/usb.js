import * as React from "react";
const USBIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={"50%"}
		height={"50%"}
		viewBox='0 0 95 180'
		preserveAspectRatio='xMidYMid meet'
		fill='none'
		{...props}>
		<g filter='url(#e)'>
			<path
				fill='#fff'
				stroke='#000'
				strokeWidth={5}
				d='M13.573 3v52.079h21.405v-4.933a4 4 0 0 1 4-4H54.91a4 4 0 0 1 4 4v4.933h21.742V3H13.573Z'
			/>
			<path fill='#111' d='M25.54 21.708h9.438v9.438H25.54zM58.91 21.708h9.438v9.438H58.91z' />
			<path
				fill='#111'
				stroke='#111'
				strokeWidth={5}
				d='M7 55.079h28.146v-3.596a5 5 0 0 1 5-5H52.91a6 6 0 0 1 6 6v2.596h28.652v47.696c0 15.638-12.677 28.315-28.315 28.315v6.741h-7.584V153h-9.27v-15.169h-7.247v-6.741h-4.719C17.489 131.09 7 120.601 7 107.663V55.079Z'
			/>
		</g>
		<defs>
			<filter
				id='e'
				width={"auto"}
				height={"auto"}
				x={0.5}
				y={0.5}
				colorInterpolationFilters='sRGB'
				filterUnits='userSpaceOnUse'>
				<feFlood floodOpacity={0} result='BackgroundImageFix' />
				<feColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2='hardAlpha' operator='out' />
				<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
				<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_504_1173' />
				<feBlend in='SourceGraphic' in2='effect1_dropShadow_504_1173' result='shape' />
			</filter>
		</defs>
	</svg>
);
export default USBIcon;
