import * as React from "react";
const PWMIcon = (props) => {
	const getImageSize = () => {
		console.log(props.size);
		switch (props.size) {
			case "xs":
				return 98;
			case "xsPlus":
				return 108;
			case "sm":
				return 118;
			case "md":
				return 128;
			case "mdPlus":
				return 128;
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
			width={"75%"}
			height={"75%"}
			viewBox='0 0 150 160'
			preserveAspectRatio='xMidYMid meet'
			fill='none'
			{...props}>
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
