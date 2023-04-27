import React, { useState, useRef, useEffect, memo } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Container, Box, Typography, LinearProgress, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import styles from "../styles/Overview.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { MACSLogoBlue } from "../assets/macs_logo_light_blue";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../styles/theme";
import GradientText from "./GradientText";
import { MACSLogo } from "../assets/macs_logo";
import {
	getWidthOffset,
	getHeightOffset,
	gridScaler,
	ModuleSVG,
	getElevation,
	getModuleBackgroundColor,
	GeneratedHexagon,
} from "../utils/HelperFunctions";
import { Hexagons } from "../utils/Hexagons";

const PageTen = ({ offset, gradient, onClick, router }) => {
	const [viewBox, setViewBox] = useState("-50 -50 100 100");
	const filteredHexagons = Hexagons.filter((hexagon) => {
		return !(hexagon?.mainModule ?? false);
	});
	const hexagonSize = { x: 15, y: 15 };
	const dropzoneRefs = useRef([]);

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
		// setViewBox(viewBox);
	};

	const GeneratedHexgrid = memo(
		() => {
			return (
				<HexGrid
					id='module-grid'
					height={"85vh"}
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
	}, []);
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick}>
				<div className={styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				onClick={onClick}
				offset={offset}
				speed={0.3}>
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minHeight: "100vh",
						minWidth: "100vw",
					}}>
					<Grid container spacing={2}>
						<Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
				<Box sx={{ position: "absolute", left: "5%", top: "15%", transform: "rotate(4deg)" }}>
					<Box className={styles.rotating}>
						<HexGrid
							id='module-grid-47'
							height={"30vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-47`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonBlue.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.3} onClick={onClick}>
				<Box sx={{ position: "absolute", left: "19%", top: "42%", transform: "rotate(-12deg)" }}>
					<Box className={styles.rotatingReverseNormal}>
						<HexGrid
							id='module-grid-48'
							height={"25vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-48`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonYellow.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.9} onClick={onClick}>
				<Box sx={{ position: "absolute", left: "25%", bottom: "5%", transform: "rotate(-2deg)" }}>
					<Box className={styles.rotatingReverseSlowEaseInOut}>
						<HexGrid
							id='module-grid-49'
							height={"20vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-49`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonBlack.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.35} onClick={onClick}>
				<Box sx={{ position: "absolute", left: "0%", bottom: "5%", transform: "rotate(10deg)" }}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-50'
							height={"35vh"}
							width={"auto"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 45, y: 45 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-50`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonGreen.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick}>
				<Box
					className={boxStyles.whiteCircle}
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						height: "28vh",
						width: "28vh",
						zIndex: 10,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<MACSLogo height='27vh' />
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick}>
				<Box sx={{ position: "absolute", right: "22%", bottom: "3%", transform: "rotate(10deg)" }}>
					<Box className={styles.rotatingSlowEaseInOut}>
						<HexGrid
							id='module-grid-51'
							height={"22vh"}
							width={"22vw"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-51`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonOrange.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.27} onClick={onClick}>
				<Box sx={{ position: "absolute", right: "1%", top: "65%", transform: "rotate(10deg)" }}>
					<Box className={styles.rotatingReverse}>
						<HexGrid
							id='module-grid-52'
							height={"20vh"}
							width={"20vw"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-52`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonRed.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.55} onClick={onClick}>
				<Box sx={{ position: "absolute", right: "10%", bottom: "30%", transform: "rotate(-15deg)" }}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-53'
							height={"28vh"}
							width={"28vw"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-53`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonBlack.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick}>
				<Box sx={{ position: "absolute", right: "-2%", top: "15%", transform: "rotate(-7deg)" }}>
					<Box className={styles.rotatingSlow}>
						<HexGrid
							id='module-grid-53'
							height={"30vh"}
							width={"30vw"}
							viewBox='-50 -50 100 100'
							preserveAspectRatio='xMidYMid meet'>
							<Layout size={{ x: 55, y: 55 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
								<Hexagon
									id={`hexagon-53`}
									q={0}
									r={0}
									s={0}
									cellStyle={{ fill: theme.palette.hexagonPurple.main }}
									stroke='white'
									strokeWidth={1}
								/>
							</Layout>
						</HexGrid>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.05} onClick={onClick}>
				<Box
					className={boxStyles.darkGreyBox}
					sx={{
						position: "absolute",
						top: "24%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						pl: 2,
						pr: 1,
						pb: 1,
						pt: 2,
					}}>
					<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
						<Typography
							fontFamily='bitcount-mono-single-line-ci'
							fontSize='8rem'
							color='white'
							fontWeight={300}
							lineHeight={1}
							sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)", mt: -2 }}>
							MACS
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.45} onClick={onClick}>
				<Box
					className={boxStyles.whiteBox}
					sx={{
						position: "absolute",
						bottom: "0%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						py: 1,
						px: 2,
						maxWidth: "35vw",
					}}>
					<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
						<Typography fontFamily='K2D' color='backgroundBlack.main' fontSize='1.5rem' textAlign='center'>
							Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and William
							Freeman
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
				<Box
					className={boxStyles.lightGreyBox}
					sx={{
						position: "absolute",
						bottom: "10.5%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						py: 1,
						px: 2,
					}}>
					<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
						<Typography fontFamily='K2D' color='white' fontSize='1.5rem' textAlign='center'>
							Capstone Project By:
						</Typography>
					</Box>
				</Box>
			</ParallaxLayer>
		</>
	);
};

export default PageTen;
