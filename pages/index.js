import React, { useEffect, useState, useRef, memo } from "react";
import { useRouter } from "next/navigation";
import {
	Container,
	Box,
	Typography,
	LinearProgress,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	useMediaQuery,
	Hidden,
} from "@mui/material";
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
		const svgGrid = document?.getElementById("module-grid");
		if (!svgGrid) return;
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
				height={"550px"}
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

	const getLogoScaler = () => {
		// console.log(isExtraSmall, isSmallMinus, isSmall, isSmallPlus, isMedium, isMediumPlus);
		if (isExtraSmall) return 140;
		if (isSmallMinus) return 220;
		if (isSmall) return 220;
		if (isSmallPlus) return 230;
		if (isMedium) return 240;
		if (isMediumPlus) return 250;
		else return 200;
	};

	const isMediumPlus = useMediaQuery(theme.breakpoints.only("mdPlus"));
	const isMedium = useMediaQuery(theme.breakpoints.only("md"));
	const isSmallPlus = useMediaQuery(theme.breakpoints.only("smPlus"));
	const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
	const isSmallMinus = useMediaQuery(theme.breakpoints.only("smMinus"));
	const isExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));

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
				<Container maxWidth='xl'>
					<Box
						sx={{
							display: { xs: "none", mdPlus: "flex" },
							position: "fixed",
							zIndex: 100000000,
							top: 30,
							borderRadius: "50%",
							boxShadow: "8px 8px 13px -6px rgba(0,0,0,0.4)",
						}}>
						<MACSLogo />
					</Box>
				</Container>
			</TrailLogo>
			<BottomNav router={router} home={true} />
			<Box className={styles.container}>
				<Container maxWidth='xl'>
					<Box className='bg'></Box>
					<Box className='bg bg2'></Box>
					<Box className='bg bg3'></Box>
					<Grid
						container
						spacing={2}
						sx={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "row",
							height: "100vh",
							minHeight: { xs: "850px", md: "800px", mdPlus: "800px", lg: "850px" },
							minWidth: "100%",
							mb: { xs: 5, xsPlus: 2, smMinus: 5, sm: 15, md: 0 },
						}}>
						<Grid
							item
							xs={6}
							sx={{
								display: { xs: "none", mdPlus: "flex" },
								flexDirection: "column",
								justifyContent: { xs: "center", md: "flex-end" },
								alignItems: { xs: "center", md: "flex-start" },
								zIndex: 100,
							}}>
							<Box
								className='noselect'
								sx={{
									pl: { xs: 5, sm: 6, md: 3, lg: 2 },
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
														md: "7.5rem",
														lg: "8.5rem",
														lgPlus: "9rem",
														xl: "10rem",
														// xlPlus: "12rem",
													},
													ml: 0.5,
												}}>
												MACS
											</Typography>
											<LinearProgress
												color='hexagonBlueFull'
												sx={{ mt: { md: -3, lg: -4, lgPlus: -5 } }}
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
													md: "3.15rem",
													lg: "3.5rem",
													lgPlus: "3.5rem",
													lgPlusPlus: "4rem",
													xl: "4.5rem",
													// xlPlus: "5rem",
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
														md: "3.15rem",
														lg: "3.5rem",
														lgPlus: "3.5rem",
														lgPlusPlus: "4rem",
														xl: "4.5rem",
														// xlPlus: "5rem",
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
														md: "3.15rem",
														lg: "3.5rem",
														lgPlus: "3.5rem",
														lgPlusPlus: "4rem",
														xl: "4.5rem",
														// xlPlus: "5rem",
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
														// xlPlus: "5rem",
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
														// xlPlus: "5rem",
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
												md: "1.25rem",
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
												md: "1.25rem",
												lg: "1.25rem",
												lgPlus: "1.4rem",
												lgPlusPlus: "1.5rem",
											},
											// maxWidth: {
											// 	xs: "100%",
											// 	md: "100%",
											// 	lg: "90%",
											// 	lgPlus: "90%",
											// },
										}}>
										Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and
										William Freeman
									</Typography>
								</Trail>
							</Box>
						</Grid>
						<Grid
							item
							xs={6}
							sx={{
								display: { xs: "none", mdPlus: "flex" },
								flexDirection: "column",
								justifyContent: { xs: "center", lg: "flex-start" },
								alignItems: { xs: "center", lg: "flex-end" },
							}}>
							<Box
								id='hexgrid-container'
								sx={{
									position: "relative",
									justifyContent: "center",
								}}>
								<GeneratedHexgrid />
								<Dropzones />
							</Box>
						</Grid>
						<Grid
							item
							xs={6}
							sx={{
								display: { xs: "flex", mdPlus: "none" },
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								mt: { xs: 0, smPlus: 0 },
							}}>
							<Box
								className={boxStyles.darkerGreyBox}
								sx={{
									display: "flex",
									flexDirection: "column",
									px: 3,
									pb: { xs: 0, smPlus: 0 },
									pt: 0,
									zIndex: 1000000,
									mb: { xs: -1, smMinus: -2, sm: -1, smPlus: -2 },
								}}>
								<Typography
									fontFamily='bitcount-mono-single-line-ci'
									color='white'
									sx={{
										textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
										fontSize: {
											xs: "4.5rem",
											sm: "6rem",
											smPlus: "6.5rem",
											md: "6.5rem",
										},
										mb: -2,
										mt: -3,
									}}>
									MACS
								</Typography>
								{/* <LinearProgress color='hexagonBlueFull' sx={{ mt: { xs: -3 }, height: 2.5 }} /> */}
							</Box>
							<Box
								className={boxStyles.lightGreyBox}
								sx={{
									display: "flex",
									flexDirection: "column",
									px: 2,
									pb: 1,
									pt: 1,
									zIndex: 99,
									mb: { xs: -22, smMinus: -15 },
								}}>
								<Box sx={{ display: "flex", justifyContent: "center" }}>
									<Typography
										fontFamily='Gilroy-Heavy'
										color='white'
										sx={{
											textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
											fontSize: {
												xs: "1.8rem",
												smMinus: "2.5rem",
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
													xs: "1.8rem",
													smMinus: "2.5rem",
													md: "2.75rem",
													mdPlus: "3rem",
												},
											}}>
											Modular
										</Typography>
										{/* <LinearProgress
											color='hexagonGreenFull'
											sx={{ mt: { xs: -0.25 }, height: 2.5 }}
										/> */}
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
													xs: "1.8rem",
													smMinus: "2.5rem",
													md: "2.75rem",
													mdPlus: "3rem",
												},
											}}>
											Accessible
										</Typography>
										{/* <LinearProgress
											color='hexagonYellowFull'
											sx={{ mt: { xs: -0.25 }, height: 2.5 }}
										/> */}
									</Box>
									<Box
										display={{ xs: "none", smPlus: "flex", mdPlus: "none" }}
										sx={{ justifyContent: "center" }}>
										<Box
											sx={{
												flexDirection: "column",
												ml: { xs: 0, smPlus: 2 },
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
											{/* <LinearProgress
											color='hexagonOrangeFull'
											sx={{ mt: { xs: -0.25 }, height: 2.5 }}
										/> */}
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
											{/* <LinearProgress
											color='hexagonRedFull'
											sx={{ mt: { xs: -0.25 }, height: 2.5 }}
										/> */}
										</Box>
									</Box>
								</Box>
								<Box display={{ xs: "flex", smPlus: "none" }} sx={{ justifyContent: "center" }}>
									<Box
										sx={{
											flexDirection: "column",
											ml: { xs: 0, smPlus: 2 },
										}}>
										<Typography
											fontFamily='Gilroy-Heavy'
											color='white'
											sx={{
												textShadow: "2px 2px 5px rgba(0,0,0,0.37)",
												fontSize: {
													xs: "1.8rem",
													smMinus: "2.5rem",
													md: "2.75rem",
													mdPlus: "3rem",
												},
											}}>
											Controller
										</Typography>
										{/* <LinearProgress
												color='hexagonOrangeFull'
												sx={{ mt: { xs: -0.25 }, height: 2.5 }}
											/> */}
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
													xs: "1.8rem",
													smMinus: "2.5rem",
													md: "2.75rem",
													mdPlus: "3rem",
												},
											}}>
											System
										</Typography>
										{/* <LinearProgress
												color='hexagonRedFull'
												sx={{ mt: { xs: -0.25 }, height: 2.5 }}
											/> */}
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								display: { xs: "flex", mdPlus: "none" },
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								id='hexgrid-container-2'
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									zIndex: 10,
								}}>
								<GeneratedHexgridAlt />
								<DropzonesAlt />
								<Box
									className={boxStyles.lightGreyCircle}
									sx={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										height: `${getLogoScaler() + 15}px`,
										width: `${getLogoScaler() + 15}px`,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										zIndex: 0,
									}}>
									<MACSLogoWhite height={getLogoScaler()} />
								</Box>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								display: { xs: "flex", mdPlus: "none" },
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									maxWidth: { xs: "90%", smMinus: "80%", smPlus: "50%", md: "60%" },
									zIndex: 100,
									p: { xs: 1, smMinus: 2 },
									pb: { xs: 2, sm: 2, smPlus: 2, md: 2 },
									mt: { xs: -30, smMinus: -10, sm: -5, smPlus: -5, md: -17 },
								}}>
								<Typography
									fontFamily='K2D'
									color='backgroundBlack.main'
									fontWeight='bold'
									textAlign='center'
									sx={{
										fontSize: {
											xs: "1rem",
											smMinus: "1.05rem",
											sm: "1.1rem",
											smPlus: "1.15rem",
											md: "1.2rem",
										},
									}}>
									Capstone Project by:
								</Typography>
								<Typography
									fontFamily='K2D'
									color='backgroundBlack.main'
									textAlign='center'
									sx={{
										fontSize: {
											xs: "0.9rem",
											smMinus: "1.05rem",
											sm: "1.1rem",
											smPlus: "1.15rem",
											md: "1.2rem",
										},
									}}>
									Jarrett Anderson, Jeff Zhou, Liam Kennedy, Michael McCooey, Natalie Potapov, and
									William Freeman
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
}
