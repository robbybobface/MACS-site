import React, { useState, useEffect, useRef, memo } from "react";
import { Box, Typography, Container, Grid, useMediaQuery, Card, CardContent, CardActionArea } from "@mui/material";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import { Hexagons } from "../../utils/Hexagons";
import {
	getWidthOffset,
	getHeightOffset,
	gridScaler,
	ModuleSVG,
	getElevation,
	getModuleBackgroundColor,
	GeneratedHexagon,
} from "../../utils/HelperFunctions";
import { MACSLogo } from "../../assets/macs_logo";

function PageTenMobile() {
	const filteredHexagons = Hexagons.filter((hexagon) => {
		return !(hexagon?.mainModule ?? false);
	});
	const hexagonSize = useMediaQuery(theme.breakpoints.down("md")) ? { x: 18, y: 18 } : { x: 15, y: 15 };
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
		const svgGrid = document.getElementById("module-grid-main");
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
		// console.log(widthMin, widthMax, heightMin, heightMax);
		const controllerWidth =
			Math.abs(
				Math.max(...Hexagons.map((hexagon) => hexagon.q)) - Math.min(...Hexagons.map((hexagon) => hexagon.q))
			) + 1;
		const controllerHeight =
			Math.abs(
				Math.max(...Hexagons.map((hexagon) => hexagon.r)) - Math.min(...Hexagons.map((hexagon) => hexagon.r))
			) + 1;
		// console.log(controllerWidth, controllerHeight);
		const viewBox = `${xMin * getWidthOffset(controllerWidth, controllerHeight)} ${
			yMin * getHeightOffset(controllerHeight, controllerWidth)
		} ${(xMax - xMin) * gridScaler(controllerWidth, controllerHeight)} ${
			(yMax - yMin) * gridScaler(controllerWidth, controllerHeight)
		}`;

		// console.log(viewBox);
		// setViewBox(viewBox);
	};

	const GeneratedHexgrid = memo(
		({ height }) => {
			return (
				<HexGrid
					id='module-grid-main'
					height={useMediaQuery(theme.breakpoints.down("md")) ? (height ? "50vmax" : "100vmax") : "85vmax"}
					width={"auto"}
					viewBox={"-50 -50 100 100"}
					preserveAspectRatio={"xMidYMid meet"}>
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

	const Dropzones = () => {
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
	};

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
			// console.log(
			// 	prevProps.moduleID === nextProps.moduleID &&
			// 		prevProps.index === nextProps.index &&
			// 		prevProps.moduleType === nextProps.moduleType
			// );
			return true;
		}
	);

	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSmMinus = useMediaQuery(theme.breakpoints.down("smMinus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isSMPlus = useMediaQuery(theme.breakpoints.down("smPlus"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));

	const getLogoSize = () => {
		if (isXS) {
			return "22max";
		} else if (isXSPlus) {
			return "20vmax";
		} else if (isSmMinus) {
			return "20vmax";
		} else if (isSM) {
			return "21vmax";
		} else if (isSMPlus) {
			return "22vmax";
		} else if (isMD) {
			return "20vmax";
		} else {
			return "24vmax";
		}
	};

	const getLogoPaddingSize = () => {
		if (isXS) {
			return "24max";
		} else if (isXSPlus) {
			return "21vmax";
		} else if (isSmMinus) {
			return "21vmax";
		} else if (isSM) {
			return "22vmax";
		} else if (isSMPlus) {
			return "23vmax";
		} else if (isMD) {
			return "21vmax";
		} else {
			return "21vmax";
		}
	};

	useEffect(() => {
		positionSVG();
		for (const [index, Hexagon] of filteredHexagons.entries()) {
			// console.log("positioning dropzone");
			positionDropzone(index, `hexagon-${Hexagon.id}`);
		}
		window.setTimeout(() => {
			// console.log("resize after timeout");
			for (const [index, Hexagon] of filteredHexagons.entries()) {
				positionDropzone(index, `hexagon-${Hexagon.id}`);
			}
		}, 1000);
		window.addEventListener(
			"resize",
			() => {
				// console.log("resize again");
				for (const [index, Hexagon] of filteredHexagons.entries()) {
					positionDropzone(index, `hexagon-${Hexagon.id}`);
				}
			},
			false
		);
	}, []);
	return (
		<Container
			maxWidth='xl'
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				mt: -20,
				mb: 15,
				zIndex: 3,
			}}>
			<Grid
				container
				spacing={2}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Box
						className={[boxStyles.darkGreyBox, "noselect"]}
						sx={{
							zIndex: 10,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							pl: 2,
							pr: 1,
							pb: 1,
							pt: 2,
							maxWidth: "400px",
							minWidth: "300px",
						}}>
						<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
							<Typography
								fontFamily='bitcount-mono-single-line-ci'
								fontSize={{ xs: "6rem", md: "8rem" }}
								color='white'
								fontWeight={300}
								lineHeight={1}
								sx={{ textShadow: "2px 2px 5px rgba(0,0,0,0.37)", mt: -2 }}>
								MACS
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Box
						id='hexgrid-container'
						sx={{
							position: "relative",
							display: "flex",
							justifyContent: "center",
							mt: -3,
						}}>
						<GeneratedHexgrid height={"70vmax"} />
						<Dropzones />
						<Box
							className={boxStyles.whiteCircle}
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								height: getLogoPaddingSize(),
								width: getLogoPaddingSize(),
								zIndex: 10,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<MACSLogo height={getLogoSize()} />
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					mt={2}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}>
					<Box
						className={[boxStyles.lightGreyBox, "noselect"]}
						sx={{
							zIndex: 10,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							mt: -6,
							py: 1,
							px: 2,
						}}>
						<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
							<Typography
								fontFamily='K2D'
								color='white'
								fontSize={{ xs: "1rem", xsPlus: "1.15rem", sm: "1.3rem", md: "1.5rem" }}
								textAlign='center'>
								Capstone Project By:
							</Typography>
						</Box>
					</Box>
					<Box
						className={[boxStyles.whiteBox, "noselect"]}
						sx={{
							zIndex: 8,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							py: 1,
							px: 2,
							mt: -1,
							maxWidth: { xs: "100vw", xsPlus: "95vw", smMinus: "90vw", sm: "70vw", md: "35vw" },
							mx: { xs: 2, md: 0 },
						}}>
						<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
							<Typography
								fontFamily='K2D'
								color='backgroundBlack.main'
								fontSize={{
									xs: "0.9rem",
									xsPlus: "1rem",
									smMinus: "1.1rem",
									sm: "1.25rem",
									md: "1.5rem",
								}}
								textAlign='center'>
								Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and William
								Freeman
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default PageTenMobile;
