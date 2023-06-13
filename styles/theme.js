import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffffb3",
		},
		panButtons: {
			main: "#70828f",
		},
		backgroundBlack: {
			main: "#323232",
		},
		drawerBackground: {
			main: "#485863",
		},
		moduleBackground: {
			main: "rgba(112, 130, 143, 0.83)",
		},
		hexagonBlack: {
			main: "rgba(0, 0, 0, 0.5)",
		},
		hexagonBlackAlt: {
			main: "rgba(50, 50, 50, 0.5)",
		},
		hexagonBlackFull: {
			main: "rgba(0, 0, 0)",
		},
		hexagonRed: {
			main: "rgba(192, 0, 69, 0.5)",
		},
		hexagonRedAlt: {
			main: "rgba(192, 0, 69, 0.2)",
		},
		hexagonRedFull: {
			main: "rgba(192, 0, 69)",
		},
		hexagonBlue: {
			main: "rgba(0, 135, 177, 0.5)",
		},
		hexagonBlueAlt: {
			main: "rgba(0, 135, 177, 0.2)",
		},
		hexagonBlueFull: {
			main: "rgba(0, 135, 177)",
		},
		hexagonGreen: {
			main: "rgba(25, 177, 0, 0.5)",
		},
		hexagonGreenAlt: {
			main: "rgba(25, 177, 0, 0.2)",
		},
		hexagonGreenFull: {
			main: "rgba(25, 177, 0)",
		},
		hexagonPurple: {
			main: "rgba(143, 0, 255, 0.5)",
		},
		hexagonPurpleAlt: {
			main: "rgba(143, 0, 255, 0.2)",
		},
		hexagonPurpleFull: {
			main: "rgba(143, 0, 255)",
		},
		hexagonOrange: {
			main: "rgba(255, 61, 0, 0.5)",
		},
		hexagonOrangeAlt: {
			main: "rgba(255, 61, 0, 0.2)",
		},
		hexagonOrangeFull: {
			main: "rgba(255, 61, 0)",
		},
		hexagonYellow: {
			main: "rgba(255, 184, 0, 0.5)",
		},
		hexagonYellowAlt: {
			main: "rgba(255, 184, 0, 0.2)",
		},
		hexagonYellowFull: {
			main: "rgba(255, 184, 0)",
		},
		startButtonGreen: {
			main: "#8ac926",
		},
		stopButtonRed: {
			main: "#c00045",
		},
		selectWhite: {
			main: "#ffffff",
		},
		topBarBlue: {
			main: "#263d52",
		},
		mainLogoBlue: {
			main: "#325982",
		},
	},
	typography: {
		fontFamily: ["K2D", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
	},
	breakpoints: {
		values: {
			xs: 0,
			xsPlus: 480,
			smMinus: 600,
			sm: 675,
			smPlus: 800,
			md: 900,
			mdPlus: 1000,
			lg: 1200,
			lgPlus: 1300,
			lgPlusPlus: 1450,
			xl: 1620,
			xlPlus: 1700,
		},
	},
});

export default theme;
