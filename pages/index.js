import React, { useEffect, useState, useRef, memo } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, LinearProgress, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import { HexGrid, Layout } from "react-hexgrid";
import styles from "../styles/Home.module.css";
import { MACSLogo } from "../assets/macs_logo";
import BottomNav from "../components/BottomNav";
import { Hexagons } from "../utils/Hexagons";
import { animated, useTrail, to } from "@react-spring/web";
import {
	getWidthOffset,
	getHeightOffset,
	gridScaler,
	ModuleSVG,
	getElevation,
	getModuleBackgroundColor,
	GeneratedHexagon,
} from "../utils/HelperFunctions";

const Trail = ({ open, children }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 10, tension: 2000, friction: 250 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 10,
		y: open ? 0 : 50,
		from: { opacity: 0, x: 10, y: 50 },
	});
	return (
		<>
			{trail.map(({ height, ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div style={{ position: "relative", overflow: "hidden" }}>{items[index]}</animated.div>
				</animated.div>
			))}
		</>
	);
};
const TrailLogo = ({ open, children }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 10, tension: 2000, friction: 250 },
		opacity: open ? 1 : 0,
		from: { opacity: 0 },
	});
	return (
		<>
			{trail.map(({ height, ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div>{items[index]}</animated.div>
				</animated.div>
			))}
		</>
	);
};

export default function Home() {
	const [viewBox, setViewBox] = useState("-50 -50 100 100");
	const [open, setOpen] = useState(false);
	const filteredHexagons = Hexagons.filter((hexagon) => {
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
		const heightMin = Math.min(...Hexagons.map((hexagon) => hexagon.r));
		const heightMax = Math.max(...Hexagons.map((hexagon) => hexagon.r));
		const widthMin = Math.min(...Hexagons.map((hexagon) => hexagon.q));
		const widthMax = Math.max(...Hexagons.map((hexagon) => hexagon.q));
		console.log(widthMin, widthMax, heightMin, heightMax);
		const controllerWidth =
			Math.abs(
				Math.max(...Hexagons.map((hexagon) => hexagon.q)) - Math.min(...Hexagons.map((hexagon) => hexagon.q))
			) + 1;
		const controllerHeight =
			Math.abs(
				Math.max(...Hexagons.map((hexagon) => hexagon.r)) - Math.min(...Hexagons.map((hexagon) => hexagon.r))
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

	const GeneratedHexgrid = memo(
		() => {
			return (
				<HexGrid
					id='module-grid'
					height={"90vh"}
					width={"auto"}
					viewBox={viewBox}
					preserveAspectRatio='xMidYMid meet'>
					<Layout size={hexagonSize} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
						{Hexagons.map((hexagon, index) => (
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
			const foundHexagon = Hexagons.find((hexagon) => hexagon.id === moduleID);
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
							}}>
							<CardActionArea onClick={(e) => {}}>
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
		positionSVG();
		for (const [index, Hexagon] of filteredHexagons.entries()) {
			positionDropzone(index, `hexagon-${Hexagon.id}`);
		}
		setOpen(true);
	}, []);

	return (
		<div className={styles.container}>
			<Box className='bg'></Box>
			<Box className='bg bg2'></Box>
			<Box className='bg bg3'></Box>
			<TrailLogo open={open}>
				<Box
					sx={{
						display: "flex",
						position: "absolute",
						top: "3%",
						left: "6%",
						borderRadius: "50%",
						boxShadow: "8px 8px 13px -6px rgba(0,0,0,0.4)",
					}}>
					<MACSLogo />
				</Box>
			</TrailLogo>
			<BottomNav router={router} home={true} />
			<Grid container spacing={2}>
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
							pb: 5,
						}}>
						<Trail open={open}>
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
										fontWeight={300}
										sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
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
								<Typography
									fontFamily='Gilroy-Heavy'
									color='white'
									fontSize='5rem'
									sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
									A
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 4,
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										fontSize='5rem'
										sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
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
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										fontSize='5rem'
										sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
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
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										fontSize='5rem'
										sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
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
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										fontSize='5rem'
										sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)" }}>
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
						</Trail>
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
						<GeneratedHexgrid />
						<Dropzones />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
}
