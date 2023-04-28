import React, { memo } from "react";

import theme from "../styles/theme";
import ButtonLogo from "../assets/button";
import DialLogo from "../assets/knob";
import JoystickLogo from "../assets/joystick";
import SliderLogo from "../assets/slider";
import SwitchLogo from "../assets/switch";
import DpadLogo from "../assets/dpad";
import ButtonLogoAlt from "../assets/buttonAlt";
import DialLogoAlt from "../assets/knobAlt";
import JoystickLogoAlt from "../assets/joystickAlt";
import SliderLogoAlt from "../assets/sliderAlt";
import SwitchLogoAlt from "../assets/switchAlt";
import DpadLogoAlt from "../assets/dpadAlt";
import { Hexagon } from "react-hexgrid";

export const getWidthOffset = (controllerWidth, controllerHeight) => {
	switch (controllerWidth) {
		case 1:
			switch (controllerHeight) {
				case 1:
					return 2; // done
				case 2:
					return 1.75; // done
				case 3:
					return 1.5; // done
				default:
					return 1.4;
			}
		case 2:
			switch (controllerHeight) {
				case 1:
					return 3.25;
				case 2: //done
					return 1.5;
				case 3: // done
					return 1;
				default:
					return 1;
			}
		case 3:
			switch (controllerHeight) {
				case 1: // done
					return 1.6;
				case 2: //done
					return 1.2;
				case 3: // done
					return 1.15;
				default:
					return 1.4;
			}
		case 4:
			switch (controllerHeight) {
				case 1:
					return 1.6;
				case 2:
					return 1.4;
				case 3: // done
					return 1.5;
				case 4:
					return 1.2;
				default:
					return 1;
			}
		default:
			return 1;
	}
};

export const getHeightOffset = (controllerHeight, controllerWidth) => {
	switch (controllerHeight) {
		case 1:
			return 1.8; // done
		case 2:
			switch (controllerWidth) {
				case 1:
					return 2; // done
				case 2: // done
					return 1.5;
				case 3:
					return 1.25;
				default:
					return 1;
			}
		case 3:
			switch (controllerWidth) {
				case 1: // done
					return 1.2;
				case 2: // done
					return 1.2;
				case 3: // done
					return 1.3;
				default:
					return 1.3;
			}
		case 4:
			switch (controllerWidth) {
				case 1: // done
					return 1.2;
				case 2: // done
					return 1.2;
				case 3: // done
					return 1.2;
				case 4:
					return 1.2;
				default:
					return 1;
			}

		case 5:
			switch (controllerWidth) {
				case 1: // done
					return 1.2;
				case 2: // done
					return 1.2;
				case 3: // done
					return 1.15;
				default:
					return 1;
			}

		default:
			return 1;
	}
};

export const gridScaler = (width, height) => {
	if (width === 1 && height === 1) {
		return 2;
	} else if (width < 3 && height < 3) {
		return 1.6;
	} else if (width === 3) {
		return height <= 3 ? 1.3 : 1.1;
	} else if (width === 4) {
		return height <= 4 ? 1.2 : 1;
	} else if (height === 3) {
		return width <= 3 ? 1.3 : 1.1;
	} else if (height === 4) {
		return width <= 4 ? 1.0 : 1;
	} else {
		return 0.7;
	}
};

export const getElevation = (moduleType) => {
	switch (moduleType) {
		case "switch":
			return 8;
		case "dpad":
			return 8;
		case "dial":
			return 10;
		default:
			return 4;
	}
};

export const getModuleBackgroundColor = (moduleType) => {
	switch (moduleType) {
		case "button":
			return "hexagonRedAlt.main";
		case "switch":
			return "hexagonYellowAlt.main";
		case "slider":
			return "hexagonGreenAlt.main";
		case "dial":
			return "hexagonOrangeAlt.main";
		case "dpad":
			return "hexagonPurpleAlt.main";
		case "joystick":
			return "hexagonBlueAlt.main";
		default:
			return "hexagonBlackAlt.main";
	}
};

export const getHexagonBackgroundColor = (moduleType) => {
	switch (moduleType) {
		case "button":
			return theme.palette.hexagonRed.main;
		case "switch":
			return theme.palette.hexagonYellow.main;
		case "slider":
			return theme.palette.hexagonGreen.main;
		case "dial":
			return theme.palette.hexagonOrange.main;
		case "dpad":
			return theme.palette.hexagonPurple.main;
		case "joystick":
			return theme.palette.hexagonBlue.main;
		default:
			return theme.palette.hexagonBlack.main;
	}
};

export const GeneratedHexagon = ({ hexagon, index }) => {
	return (
		<Hexagon
			id={`hexagon-${hexagon.id}`}
			q={hexagon.q}
			r={hexagon.r}
			s={hexagon.s}
			cellStyle={{ fill: getHexagonBackgroundColor(hexagon.moduleType) }}
			stroke='white'
			strokeWidth={0.25}
		/>
	);
};

export const GeneratedHexagonAlt = ({ hexagon, index }) => {
	return (
		<Hexagon
			id={`hexagonAlt-${hexagon.id}`}
			q={hexagon.q}
			r={hexagon.r}
			s={hexagon.s}
			cellStyle={{ fill: getHexagonBackgroundColor(hexagon.moduleType) }}
			stroke='white'
			strokeWidth={0.25}
		/>
	);
};

export const ModuleSVG = ({ moduleType }) => {
	switch (moduleType) {
		case "button":
			return (
				<ButtonLogo
					width={65}
					height={65}
					style={{ paddingTop: 4, paddingLeft: 2.25, zIndex: 99999, display: "flex" }}
				/>
			);
		case "switch":
			return <SwitchLogo width={70} height={80} style={{ paddingTop: 6.5, zIndex: 99999 }} />;
		case "slider":
			return <SliderLogo width={70} height={70} style={{ paddingTop: 6, zIndex: 99999 }} />;
		case "dial":
			return <DialLogo width={107} height={107} style={{ marginTop: -1.25, marginLeft: -18.5, zIndex: 99999 }} />;
		case "dpad":
			return <DpadLogo width={65} height={65} style={{ paddingTop: 3.75, paddingLeft: 2.25, zIndex: 99999 }} />;
		case "joystick":
			return <JoystickLogo width={70} height={70} style={{ paddingTop: 5, zIndex: 99999 }} />;
		default:
			return "";
	}
};

export const ModuleSVGAlt = ({ moduleType, altType }) => {
	switch (moduleType) {
		case "button":
			return <ButtonLogoAlt width={65} height={65} style={{ paddingTop: 4, paddingLeft: 2.25, zIndex: 99999 }} />;
		case "switch":
			return <SwitchLogoAlt width={70} height={80} style={{ paddingTop: 6.5, zIndex: 99999 }} />;
		case "slider":
			return <SliderLogoAlt width={70} height={70} style={{ paddingTop: 6, zIndex: 99999 }} />;
		case "dial":
			return (
				<DialLogoAlt width={107} height={107} style={{ marginTop: -1.25, marginLeft: -18.5, zIndex: 99999 }} />
			);
		case "dpad":
			return (
				<DpadLogoAlt width={65} height={65} style={{ paddingTop: 3.75, paddingLeft: 2.25, zIndex: 99999 }} />
			);
		case "joystick":
			return <JoystickLogoAlt width={70} height={70} style={{ paddingTop: 5, zIndex: 99999 }} />;
		default:
			return "";
	}
};
