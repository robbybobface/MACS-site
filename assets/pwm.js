import * as React from "react";
const PWMIcon = ({ size }) => {
	const getImageSize = () => {
		switch (size) {
			case "xs":
				return 75;
			case "xsPlus":
				return 100;
			case "sm":
				return 115;
			case "md":
				return 130;
			case "mdPlus":
				return 130;
			case "lg":
				return 138;
			case "xl":
				return 158;
			default:
				return 158;
		}
	};

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ? getImageSize() : 150}
			height={size ? getImageSize() : 150}
			viewBox='0 0 150 180'
			preserveAspectRatio='xMidYMid meet'
			fill='none'>
			<g filter='url(#test)'>
				<path stroke='#000' strokeWidth={8} d='M154 5h-36.4v150H81.933V5H44.553v150H4' />
			</g>
			<defs>
				<filter
					id='test'
					width={"auto"}
					height={"auto"}
					x={0}
					y={0}
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'>
					<feFlood floodOpacity={0} result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						result='hardAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
					<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_503_1152' />
					<feBlend in='SourceGraphic' in2='effect1_dropShadow_503_1152' result='shape' />
				</filter>
			</defs>
		</svg>
	);
};
export default PWMIcon;
