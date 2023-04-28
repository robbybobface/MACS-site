import React, { useEffect, useState, useRef, memo } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, LinearProgress, Grid, Card, CardActionArea, CardContent, useMediaQuery } from "@mui/material";
import { HexGrid, Layout } from "react-hexgrid";
import styles from "../styles/Home.module.css";
import boxStyles from "../styles/BoxStyles.module.css";
import { MACSLogo } from "../assets/macs_logo";
import { MACSLogoWhite } from "../assets/macs_logo_white";
import BottomNav from "../components/BottomNav";
import theme from "../styles/theme";
import { Hexagons, HexagonsAlt } from "../utils/Hexagons";
import { animated, useTrail, to } from "@react-spring/web";

import {
	getWidthOffset,
	getHeightOffset,
	gridScaler,
	getElevation,
	getModuleBackgroundColor,
	GeneratedHexagon,
	GeneratedHexagonAlt,
	ModuleSVG,
	ModuleSVGAlt,
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
	const filteredHexagonsAlt = HexagonsAlt.filter((hexagon) => {
		return !(hexagon?.mainModule ?? false);
	});
	const hexagonSize = { x: 10, y: 10 };
	const dropzoneRefs = useRef([]);
	const dropzoneAltRefs = useRef([]);
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

	const positionDropzoneAlt = (dropzoneIndex, moduleID) => {
		// get the target dropzone element
		// const dropzone = document.getElementById(dropzoneID);
		const dropzone = dropzoneAltRefs.current[dropzoneIndex];
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

	const GeneratedHexgrid = () => {
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
	};

	const GeneratedHexgridAlt = () => {
		return (
			<HexGrid
				id='module-grid-2'
				height={"75vh"}
				width={"auto"}
				viewBox={"-50 -50 100 100"}
				preserveAspectRatio='xMidYMid meet'>
				<Layout size={{ x: 18, y: 18 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
					{HexagonsAlt.map((hexagon, index) => (
						<GeneratedHexagonAlt key={hexagon.id} hexagon={hexagon} index={index} />
					))}
				</Layout>
			</HexGrid>
		);
	};

	const DropzonesAlt = () => {
		return filteredHexagonsAlt.map((hexagon, index) => {
			return (
				<DropzoneAlt
					key={`dropzoneAltKey-${hexagon.id}`}
					moduleID={hexagon.id}
					moduleType={hexagon.moduleType}
					index={index}
				/>
			);
		});
	};

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

	const DropzoneAlt = ({ moduleID, moduleType, index }) => {
		const foundHexagon = HexagonsAlt.find((hexagon) => hexagon.id === moduleID);
		return (
			<Box
				id={`dropzoneAlt-${moduleID}`}
				ref={(el) => (dropzoneAltRefs.current[index] = el)}
				sx={{
					position: "absolute",
					width: "80px",
					height: "104px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				{foundHexagon?.moduleType !== undefined ? (
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
								<ModuleSVGAlt moduleType={moduleType} />
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
	};

	const Dropzone = ({ moduleID, moduleType, index }) => {
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
	};

	// On initial render
	useEffect(() => {
		window.setTimeout(() => {
			console.log("resize");
			for (const [index, Hexagon] of filteredHexagons.entries()) {
				positionDropzone(index, `hexagon-${Hexagon.id}`);
			}
			for (const [index, Hexagon] of filteredHexagonsAlt.entries()) {
				positionDropzoneAlt(index, `hexagonAlt-${Hexagon.id}`);
			}
			positionSVG();
			window.addEventListener(
				"resize",
				() => {
					console.log("resize again");
					for (const [index, Hexagon] of filteredHexagons.entries()) {
						positionDropzone(index, `hexagon-${Hexagon.id}`);
					}
					for (const [index, Hexagon] of filteredHexagonsAlt.entries()) {
						positionDropzoneAlt(index, `hexagonAlt-${Hexagon.id}`);
					}
					positionSVG();
				},
				false
			);
		}, 5);
		positionSVG();
		for (const [index, Hexagon] of filteredHexagons.entries()) {
			positionDropzone(index, `hexagon-${Hexagon.id}`);
		}
		for (const [index, Hexagon] of filteredHexagonsAlt.entries()) {
			positionDropzoneAlt(index, `hexagonAlt-${Hexagon.id}`);
		}
		setOpen(true);
	}, []);

	return (
		<>
			<TrailLogo open={open}>
				<Box
					sx={{
						display: "flex",
						position: "fixed",
						top: "3%",
						left: { xs: "3%", lg: "6%" },
						borderRadius: "50%",
						boxShadow: "8px 8px 13px -6px rgba(0,0,0,0.4)",
					}}>
					<MACSLogo />
				</Box>
			</TrailLogo>
			<BottomNav router={router} home={true} />
			<div className={styles.container}>
				<Box className='bg'></Box>
				<Box className='bg bg2'></Box>
				<Box className='bg bg3'></Box>
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						lg={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: { xs: "center", lg: "flex-end" },
							alignItems: { xs: "center", lg: "flex-start" },
							zIndex: 1000,
						}}>
						<Box
							className='noselect'
							sx={{
								pl: { xs: 5, sm: 6, md: 7, lg: 8, lgPlus: 10, lgPlusPlus: 12, xl: 14.5 },
								pb: 5,
								display: { xs: "none", lg: "block" },
							}}>
							<Trail open={open}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "flex-start",
										justifyContent: "flex-start",
									}}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
										}}>
										<Typography
											fontFamily='bitcount-mono-single-line-ci'
											color='white'
											sx={{
												textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
												fontSize: {
													xs: "4rem",
													md: "7rem",
													lg: "8.5rem",
													lgPlus: "9rem",
													xl: "10rem",
													xlPlus: "12rem",
												},
												ml: 0.5,
											}}>
											MACS
										</Typography>
										<LinearProgress
											color='hexagonBlueFull'
											sx={{ mt: { xs: 0, lg: -4, lgPlus: -5, xlPlus: -6 } }}
										/>
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
										sx={{
											textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
											fontSize: {
												xs: "2rem",
												md: "2.5rem",
												lg: "3.5rem",
												lgPlus: "3.5rem",
												lgPlusPlus: "4rem",
												xl: "4.5rem",
												xlPlus: "5rem",
											},
										}}>
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
											sx={{
												textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
												fontSize: {
													xs: "2rem",
													md: "2.5rem",
													lg: "3.5rem",
													lgPlus: "3.5rem",
													lgPlusPlus: "4rem",
													xl: "4.5rem",
													xlPlus: "5rem",
												},
											}}>
											Modular
										</Typography>
										<LinearProgress color='hexagonGreenFull' sx={{ mt: { xs: 0, lg: -1 } }} />
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
											sx={{
												textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
												fontSize: {
													xs: "2rem",
													md: "2.5rem",
													lg: "3.5rem",
													lgPlus: "3.5rem",
													lgPlusPlus: "4rem",
													xl: "4.5rem",
													xlPlus: "5rem",
												},
											}}>
											Accessible
										</Typography>
										<LinearProgress color='hexagonYellowFull' sx={{ mt: { xs: 0, lg: -1 } }} />
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
											sx={{
												textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
												fontSize: {
													xs: "2rem",
													md: "2.5rem",
													lg: "3.5rem",
													lgPlus: "3.5rem",
													lgPlusPlus: "4rem",
													xl: "4.5rem",
													xlPlus: "5rem",
												},
											}}>
											Controller
										</Typography>
										<LinearProgress color='hexagonOrangeFull' sx={{ mt: { xs: 0, lg: -1 } }} />
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
											sx={{
												textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
												fontSize: {
													xs: "2rem",
													md: "2.5rem",
													lg: "3.5rem",
													lgPlus: "3.5rem",
													lgPlusPlus: "4rem",
													xl: "4.5rem",
													xlPlus: "5rem",
												},
											}}>
											System
										</Typography>
										<LinearProgress color='hexagonRedFull' sx={{ mt: { xs: 0, lg: -1 } }} />
									</Box>
								</Box>
								<Typography
									fontFamily='K2D'
									color='white'
									sx={{
										fontSize: {
											xs: "1rem",
											md: "1.1rem",
											lg: "1.25rem",
											lgPlus: "1.4rem",
											lgPlusPlus: "1.5rem",
										},
									}}>
									Capstone Project by:
								</Typography>
								<Typography
									fontFamily='K2D'
									color='white'
									sx={{
										fontSize: {
											xs: "1rem",
											md: "1.1rem",
											lg: "1.25rem",
											lgPlus: "1.4rem",
											lgPlusPlus: "1.5rem",
										},
										maxWidth: {
											xs: "100%",
											md: "100%",
											lg: "90%",
											lgPlus: "90%",
										},
									}}>
									Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and
									William Freeman
								</Typography>
							</Trail>
						</Box>
						<Box
							id='hexgrid-container-2'
							sx={{
								position: "relative",
								display: { xs: "flex", lg: "none" },
								justifyContent: "center",
								zIndex: 1000,
							}}>
							<GeneratedHexgridAlt />
							<DropzonesAlt />
							<Box
								className={boxStyles.darkerGreyBox}
								sx={{
									position: "absolute",
									top: { xs: "11.5%", smMinus: "5%", sm: "-1%" },
									left: "50%",
									transform: "translate(-50%, -50%)",
									display: "flex",
									flexDirection: "column",
									px: 3,
									pb: { xs: 2, smPlus: 3 },
									pt: 0,
									zIndex: 1,
								}}>
								<Typography
									fontFamily='bitcount-mono-single-line-ci'
									color='white'
									sx={{
										textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
										fontSize: {
											xs: "5.5rem",
											sm: "6rem",
											smPlus: "6.5rem",
											md: "7rem",
										},
										mt: -3,
									}}>
									MACS
								</Typography>
								<LinearProgress color='hexagonBlueFull' sx={{ mt: { xs: -3 }, height: 2.5 }} />
							</Box>
							<Box
								className={boxStyles.lightGreyBox}
								sx={{
									position: "absolute",
									top: { xs: "22%", smMinus: "16%", sm: "11%", smPlus: "12.5%", md: "14%" },
									left: "50%",
									transform: "translate(-50%, -50%)",
									display: "flex",
									flexDirection: "row",
									px: 2,
									pb: 2,
									pt: 1,
									zIndex: 0,
								}}>
								<Typography
									fontFamily='Gilroy-Heavy'
									color='white'
									sx={{
										textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
										fontSize: {
											xs: "1.35rem",
											smMinus: "1.75rem",
											sm: "2rem",
											smPlus: "2.5rem",
											md: "2.75rem",
											mdPlus: "3rem",
										},
									}}>
									A
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 2,
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										sx={{
											textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
											fontSize: {
												xs: "1.35rem",
												smMinus: "1.75rem",
												sm: "2rem",
												smPlus: "2.5rem",
												md: "2.75rem",
												mdPlus: "3rem",
											},
										}}>
										Modular
									</Typography>
									<LinearProgress color='hexagonGreenFull' sx={{ mt: { xs: -0.25 }, height: 2.5 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 2,
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										sx={{
											textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
											fontSize: {
												xs: "1.35rem",
												smMinus: "1.75rem",
												sm: "2rem",
												smPlus: "2.5rem",
												md: "2.75rem",
												mdPlus: "3rem",
											},
										}}>
										Accessible
									</Typography>
									<LinearProgress color='hexagonYellowFull' sx={{ mt: { xs: -0.25 }, height: 2.5 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 2,
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										sx={{
											textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
											fontSize: {
												xs: "1.35rem",
												smMinus: "1.75rem",
												sm: "2rem",
												smPlus: "2.5rem",
												md: "2.75rem",
												mdPlus: "3rem",
											},
										}}>
										Controller
									</Typography>
									<LinearProgress color='hexagonOrangeFull' sx={{ mt: { xs: -0.25 }, height: 2.5 }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										ml: 2,
									}}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										sx={{
											textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
											fontSize: {
												xs: "1.35rem",
												smMinus: "1.75rem",
												sm: "2rem",
												smPlus: "2.5rem",
												md: "2.75rem",
												mdPlus: "3rem",
											},
										}}>
										System
									</Typography>
									<LinearProgress color='hexagonRedFull' sx={{ mt: { xs: -0.25 }, height: 2.5 }} />
								</Box>
							</Box>
							<Box
								className={boxStyles.lightGreyCircle}
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									height: { xs: "24vh", smMinus: "27vh", sm: "28vh" },
									width: { xs: "24vh", smMinus: "27vh", sm: "28vh" },
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									zIndex: 0,
								}}>
								<MACSLogoWhite height={"95%"} />
							</Box>
							<Box
								sx={{
									position: "fixed",
									zIndex: 1000,
									left: { xs: "3%" },
									bottom: { xs: "7%", smMinus: "6%", sm: "5%", smPlus: "2%" },
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start",
									width: { xs: 275, sm: 290, smPlus: 330, md: 400 },
									p: 2,
								}}>
								<Typography
									fontFamily='K2D'
									color='white'
									sx={{
										fontSize: {
											xs: "1rem",
											smMinus: "1.05rem",
											sm: "1.10rem",
											smPlus: "1.15rem",
											md: "1.4rem",
										},
									}}>
									Capstone Project by:
								</Typography>
								<Typography
									fontFamily='K2D'
									color='white'
									sx={{
										fontSize: {
											xs: "1rem",
											smMinus: "1.05rem",
											sm: "1.10rem",
											smPlus: "1.15rem",
											md: "1.4rem",
										},
										maxWidth: {
											xs: "100%",
											md: "100%",
											lg: "90%",
											lgPlus: "90%",
										},
									}}>
									Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and
									William Freeman
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={12}
						lg={6}
						sx={{
							flexDirection: "column",
							justifyContent: { xs: "center", lg: "flex-start" },
							alignItems: { xs: "center", lg: "flex-end" },
						}}>
						<Box
							id='hexgrid-container'
							sx={{
								position: "relative",
								display: { xs: "none", lg: "block" },
								justifyContent: "center",
							}}>
							<GeneratedHexgrid />
							<Dropzones />
						</Box>
					</Grid>
				</Grid>
			</div>
		</>
	);
}
