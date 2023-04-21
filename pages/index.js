import React, { useEffect, useState, useRef, memo, useMemo } from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { Box, Typography, LinearProgress, Grid, Card, CardActionArea, CardContent, Button } from "@mui/material";
import {
	ZoomIn,
	ZoomOut,
	RestartAlt,
	RotateLeft,
	RotateRight,
	BoltOutlined,
	Terminal,
	VideogameAssetOutlined,
	EmojiEventsOutlined,
	Diversity3Outlined,
} from "@mui/icons-material";
import theme from "../styles/theme";
import { MACSLogoLightBlue } from "../assets/macs_logo_light_blue";
import { MACSLogoWhite } from "../assets/macs_logo_white";
import ButtonLogo from "../assets/button";
import DialLogo from "../assets/knob";
import JoystickLogo from "../assets/joystick";
import SliderLogo from "../assets/slider";
import SwitchLogo from "../assets/switch";
import DpadLogo from "../assets/dpad";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import styles from "../styles/Home.module.css";

const Hexagons = [
	{
		id: nanoid(),
		q: 0,
		r: -1,
		s: 1,
		moduleType: undefined,
		mainModule: true,
	},
	{
		id: nanoid(),
		q: -1,
		r: 0,
		s: 1,
		moduleType: "dial",
		configuration: {
			input: [
				{
					start: 0,
					end: 100,
				},
			],
		},
	},
	{
		id: nanoid(),
		q: -1,
		r: 1,
		s: 0,
		moduleType: "button",
		configuration: {},
	},
	{
		id: nanoid(),
		q: 1,
		r: -1,
		s: 0,
		moduleType: "slider",
		configuration: {
			input: [
				{
					start: 0,
					end: 100,
				},
			],
		},
	},
	{
		id: nanoid(),
		q: 1,
		r: 0,
		s: -1,
		moduleType: "joystick",
		configuration: {
			behavior: "default",
		},
	},
	{
		id: nanoid(),
		q: 0,
		r: 1,
		s: -1,
		moduleType: "switch",
		configuration: {},
	},
];

export default function Home() {
	const [hexagons, setHexagons] = useState(Hexagons);
	const [dropzones, setDropzones] = useState([]);
	const [viewBox, setViewBox] = useState("-50 -50 100 100");
	const filteredHexagons = hexagons.filter((hexagon) => {
		return !(hexagon?.mainModule ?? false);
	});
	const hexagonSize = { x: 10, y: 10 };
	const dropzoneRefs = useRef([]);
	const router = useRouter();

	const positionDropzone = (dropzoneIndex, moduleID) => {
		// get the target dropzone element
		// const dropzone = document.getElementById(dropzoneID);
		const dropzone = dropzoneRefs.current[dropzoneIndex];
		// console.log(dropzone);
		// get the target module element
		const localModule = document.getElementById(moduleID);
		// console.log(hexagonRefs.current);
		// const localModule = hexagonRefs.current[moduleIndex];
		// console.log(localModule);
		// bounding box for the target module element
		if (!localModule) return;
		const dropzoneBB = localModule?.getCTM();
		// set the position of the dropzone absolute to the hexgrid svg
		// console.log(dropzoneBB);
		if (dropzone) {
			dropzone.style.left = dropzoneBB.e - 40 + "px";
			dropzone.style.top = dropzoneBB.f - 52 + "px";
		}
	};

	const getWidthOffset = (controllerWidth, controllerHeight) => {
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

	const getHeightOffset = (controllerHeight, controllerWidth) => {
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

	const gridScaler = (width, height) => {
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

	const positionSVG = () => {
		const svgGrid = document.getElementById("module-grid");
		const { xMin, xMax, yMin, yMax } = [...svgGrid?.children].reduce((acc, el) => {
			const { x, y, width, height } = el.getBBox();
			if (!acc.xMin || x < acc.xMin) acc.xMin = x;
			if (!acc.xMax || x + width > acc.xMax) acc.xMax = x + width;
			if (!acc.yMin || y < acc.yMin) acc.yMin = y;
			if (!acc.yMax || y + height > acc.yMax) acc.yMax = y + height;
			return acc;
		}, {});
		const heightMin = Math.min(...hexagons.map((hexagon) => hexagon.r));
		const heightMax = Math.max(...hexagons.map((hexagon) => hexagon.r));
		const widthMin = Math.min(...hexagons.map((hexagon) => hexagon.q));
		const widthMax = Math.max(...hexagons.map((hexagon) => hexagon.q));
		console.log(widthMin, widthMax, heightMin, heightMax);
		const controllerWidth =
			Math.abs(
				Math.max(...hexagons.map((hexagon) => hexagon.q)) - Math.min(...hexagons.map((hexagon) => hexagon.q))
			) + 1;
		const controllerHeight =
			Math.abs(
				Math.max(...hexagons.map((hexagon) => hexagon.r)) - Math.min(...hexagons.map((hexagon) => hexagon.r))
			) + 1;
		console.log(controllerWidth, controllerHeight);
		const viewBox = `${xMin * getWidthOffset(controllerWidth, controllerHeight)} ${
			yMin * getHeightOffset(controllerHeight, controllerWidth)
		} ${(xMax - xMin) * gridScaler(controllerWidth, controllerHeight)} ${
			(yMax - yMin) * gridScaler(controllerWidth, controllerHeight)
		}`;

		console.log(viewBox);
		setViewBox(viewBox);
	};

	const ModuleSVG = memo(
		({ moduleType }) => {
			switch (moduleType) {
				case "button":
					return <ButtonLogo width={65} height={65} style={{ paddingTop: 4, paddingLeft: 2.25 }} />;
				case "switch":
					return <SwitchLogo width={70} height={80} style={{ paddingTop: 6.5 }} />;
				case "slider":
					return <SliderLogo width={70} height={70} style={{ paddingTop: 6 }} />;
				case "dial":
					return <DialLogo width={107} height={107} style={{ marginTop: -1.25, marginLeft: -18.5 }} />;
				case "dpad":
					return <DpadLogo width={65} height={65} style={{ paddingTop: 3.75, paddingLeft: 2.25 }} />;
				case "joystick":
					return <JoystickLogo width={70} height={70} style={{ paddingTop: 5 }} />;
				default:
					return "";
			}
		},
		(prevProps, nextProps) => {
			return prevProps.moduleType === nextProps.moduleType;
		}
	);

	const getElevation = (moduleType) => {
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

	const getModuleBackgroundColor = (moduleType) => {
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

	const getHexagonBackgroundColor = (moduleType) => {
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

	const GeneratedHexagon = ({ hexagon, index }) => {
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

	const GeneratedHexgrid = memo(
		({ localHexagons }) => {
			return (
				<HexGrid
					id='module-grid'
					height={"90vh"}
					width={"auto"}
					viewBox={viewBox}
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={hexagonSize} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						{localHexagons.map((hexagon, index) => (
							<GeneratedHexagon key={hexagon.id} hexagon={hexagon} index={index} />
						))}
					</Layout>
				</HexGrid>
			);
		},
		(prevProps, nextProps) => {
			// console.log(prevProps.localHexagons === nextProps.localHexagons);
			return prevProps.localHexagons === nextProps.localHexagons;
		}
	);

	const Dropzones = memo(
		() => {
			return filteredHexagons.map((hexagon, index) => {
				// <ModuleContext.Provider value={providerValues}>
				return (
					<Dropzone
						key={`dropzoneKey-${hexagon.id}`}
						moduleID={hexagon.id}
						moduleType={hexagon.moduleType}
						index={index}
					/>
				);
			});
		},
		() => true
	);

	const Dropzone = memo(
		({ moduleID, moduleType, index }) => {
			const foundHexagon = hexagons.find((hexagon) => hexagon.id === moduleID);
			// console.log(foundHexagon);
			return (
				<Box
					id={`dropzone-${moduleID}`}
					ref={(el) => (dropzoneRefs.current[index] = el)}
					sx={{
						position: "absolute",
						// backgroundColor: "red",
						width: "80px",
						height: "104px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}>
					{foundHexagon.moduleType !== undefined ? (
						<Card
							elevation={getElevation(moduleType)}
							sx={{
								width: "70px",
								height: "70px",
								backgroundColor: getModuleBackgroundColor(moduleType),
								// zIndex: 1000,
							}}>
							<CardActionArea
								onClick={(e) => {
									// panRef.current.zoomToElement(`dropzone-${moduleID}`, 3, 300, "easeOut");
									// console.log(hexagons);
									// setActiveHexagon({ ...foundHexagon, index });
									// setTempHexagon({ ...foundHexagon, index });
									// setSidePanelOpen(true);
									// console.log("active Hexagon:");
									// console.log(foundHexagon);
								}}>
								<CardContent
									sx={{
										width: "70px",
										height: "70px",
										padding: 0,
										margin: 0,
									}}>
									<ModuleSVG moduleType={moduleType} />
								</CardContent>
							</CardActionArea>
						</Card>
					) : (
						""
					)}
					<Typography
						className='noselect'
						color={"white"}
						sx={{
							fontSize: 12,
							position: "absolute",
							bottom: -3,
							left: 0,
							right: 0,
							margin: "auto",
							textAlign: "center",
						}}>
						{`Module ${index + 1}`}
					</Typography>
					<Typography
						sx={{
							position: "absolute",
							color: "white",
							fontSize: 12,
							display: foundHexagon.moduleType !== undefined ? "none" : "inherit",
							zIndex: -1,
						}}>
						Unassigned
					</Typography>
				</Box>
			);
		},
		(prevProps, nextProps) => {
			console.log(
				prevProps.moduleID === nextProps.moduleID &&
					prevProps.index === nextProps.index &&
					prevProps.moduleType === nextProps.moduleType
			);
			return true;
		}
	);

	// On initial render
	useEffect(() => {
		window.setTimeout(() => {
			console.log("resize");
			for (const [index, Hexagon] of filteredHexagons.entries()) {
				positionDropzone(index, `hexagon-${Hexagon.id}`);
			}
			window.addEventListener(
				"resize",
				() => {
					console.log("resize again");
					for (const [index, Hexagon] of filteredHexagons.entries()) {
						positionDropzone(index, `hexagon-${Hexagon.id}`);
					}
				},
				false
			);
		}, 5);
		let tempDropzones = [];
		positionSVG();
		for (const [index, Hexagon] of filteredHexagons.entries()) {
			positionDropzone(index, `hexagon-${Hexagon.id}`);
			tempDropzones = [...tempDropzones, Hexagon.id];
		}
		const tempInputTypes = new Set(filteredHexagons.map((hexagon) => hexagon.moduleType));
		console.log(tempInputTypes);
		// setDistinctInputTypes(Array.from(tempInputTypes));
		setDropzones(tempDropzones);
	}, []);

	return (
		<div className={styles.container}>
			{/* <Head>
				<title>MACS</title>
				<link rel='icon' href='/favicon.svg' />
			</Head> */}
			<Box className='bg'></Box>
			<Box className='bg bg2'></Box>
			<Box className='bg bg3'></Box>
			<Box flex={1} sx={{ position: "absolute" }}>
				<Box sx={{ position: "absolute", top: 40, left: 120 }}>
					<MACSLogoWhite />
				</Box>
				<Grid container spacing={2} sx={{ minWidth: "100vw", minHeight: "100vh" }}>
					<Grid
						item
						xs={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							alignItems: "flex-start",
							zIndex: 1000,
						}}>
						<Box
							className='noselect'
							sx={{
								pl: 14.5,
								pb: 8,
							}}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "flex-start",
									justifyContent: "flex-start",
								}}>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Typography
										fontFamily='bitcount-mono-single-line-ci'
										fontSize='12rem'
										color='white'
										fontWeight={300}>
										MACS
									</Typography>
									<LinearProgress color='hexagonBlueFull' sx={{ mt: -6 }} />
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "flex-start",
									justifyContent: "flex-start",
								}}>
								<Typography fontFamily='Gilroy-Heavy' color='white' fontSize='5rem'>
									A
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 4,
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='white' fontSize='5rem'>
										Modular
									</Typography>
									<LinearProgress color='hexagonGreenFull' sx={{ mt: -2 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 4,
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='white' fontSize='5rem'>
										Accessible
									</Typography>
									<LinearProgress color='hexagonYellowFull' sx={{ mt: -2 }} />
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "flex-start",
									justifyContent: "flex-start",
									mb: 2,
								}}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='white' fontSize='5rem'>
										Controller
									</Typography>
									<LinearProgress color='hexagonOrangeFull' sx={{ mt: -1 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 4,
									}}>
									<Typography fontFamily='Gilroy-Heavy' color='white' fontSize='5rem'>
										System
									</Typography>
									<LinearProgress color='hexagonRedFull' sx={{ mt: -1 }} />
								</Box>
							</Box>
							<Typography fontFamily='K2D' color='white' fontSize='1.5rem' maxWidth='60%'>
								Capstone Project by:
							</Typography>
							<Typography fontFamily='K2D' color='white' fontSize='1.5rem' maxWidth='70%'>
								Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and William
								Freeman
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "flex-end",
						}}>
						<Box
							id='hexgrid-container'
							sx={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
							}}>
							<GeneratedHexgrid localHexagons={hexagons} />
							<Dropzones />
						</Box>
						<Box
							sx={{
								// display: "flex",
								position: "relative",
								// right: -460,
								zIndex: 1000,
								// right: 80,
								justifyContent: "space-between",
								width: 400,
								flexDirection: "column",
								mt: -10,
								mr: 10,
							}}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "center",
									pb: 1.5,
								}}>
								<Button
									variant='contained'
									// disabled={gridRotate === "-30deg"}
									color='drawerBackground'
									onClick={() => console.log("rotate left")}
									sx={{ marginRight: 3.9, minHeight: 40 }}
									// style={{ padding: 0 }}
								>
									<Diversity3Outlined color='primary' />
								</Button>
								<Button
									variant='contained'
									// disabled={gridRotate === "30deg"}
									color='drawerBackground'
									sx={{ minHeight: 40 }}
									onClick={() => console.log("rotate right")}>
									<EmojiEventsOutlined color='primary' />
								</Button>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}>
								<Button
									variant='contained'
									color={"startButtonGreen"}
									style={{
										textTransform: "none",
										color: "white",
										fontSize: "1rem",
									}}
									onClick={() => router.push("/project-overview")}>
									{"Learn More"}
								</Button>
								<Button
									variant='contained'
									color='drawerBackground'
									onClick={() => console.log("zoom in")}
									sx={{ padding: 0, minHeight: 40 }}
									style={{ padding: 0 }}>
									<BoltOutlined color='primary' />
								</Button>
								<Button
									variant='contained'
									color='drawerBackground'
									onClick={() => console.log("zoom out")}
									size='small'
									sx={{ padding: 0 }}>
									<VideogameAssetOutlined color='primary' />
								</Button>
								<Button
									variant='contained'
									color='drawerBackground'
									onClick={() => {
										// centerView();
										// resetTransform();
										console.log("reset");
										// setTransform(160, 0, 1, 300, "easeInQuad");
									}}
									size='small'>
									<Terminal color='primary' />
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
