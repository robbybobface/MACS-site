import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import BlurHashedImage from "../Partials/BlurHashedImage";
import ImageCaption from "../ImageCaption";
import ApplicationFlowChart from "../../assets/application_flowchart";

const PageTwo = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1
			? 1000 / window.innerHeight
			: 1
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));
	const getImageHeights = () => {
		if (isMD) {
			return 275;
		} else if (isMDPlus) {
			return 295;
		} else if (isLG) {
			return 305;
		} else if (isXL) {
			return 315;
		} else {
			return 325;
		}
	};
	const getFlowChartWidth = () => {
		if (isMD) {
			return "35vmax";
		} else if (isMDPlus) {
			return "36vmax";
		} else if (isLG) {
			return "37vmax";
		} else if (isXL) {
			return "38vmax";
		} else {
			return "32vmax";
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div
					// className={
					// 	useMediaQuery(theme.breakpoints.down("md")) ? styles.slopeBeginMobileFour : styles.slopeBegin
					// }
					className={styles.slopeBegin}
				/>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`noselect`}
				onClick={onClick}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 100 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000000,
					}}>
					<Grid container spacing={2}>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='USB Data Decoding'
								gradient='background: rgb(176,38,84);
background: linear-gradient(125deg, rgba(176,38,84,1) 0%, rgba(162,0,42,1) 88%);'
								onClick={onClick}
								fontSize={{ xs: "2.5rem", md: "4rem", mdPlus: "4.75rem", lg: "5.25rem", xl: "6rem" }}
								textAlign={"center"}
								lineHeight={1.1}
								pb={3}
							/>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									p: { xs: 2, md: 3, lg: 4 },
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "16px",
											lg: "18px",
											xl: "20px",
										},
									}}
									textAlign='justify'>
									On the application the USB packets sent by the central hub are received and
									processed using the Node-HID library. This library allows us to read the input
									reports sent by MACS, as it has identified itself as a Human Interface Device. For
									each of the 5 different input reports being received we process each individually.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-evenly",
								alignItems: "center",
								minHeight: { xs: "900px", md: "725px" },
							}}>
							<Grid
								container
								spacing={2}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid
									item
									xs={12}
									md={11}
									lgPlus={11}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box sx={{ position: "relative", display: "flex" }}>
										<Box
											className={boxStyles.whiteBox}
											sx={{
												overflow: "clip",
												p: 2,
											}}>
											<ApplicationFlowChart width={getFlowChartWidth()} />
										</Box>
										<ImageCaption caption={"Application Breakdown - USB Decoding"} light={false} />
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Box
										className={boxStyles.lightGreyBox}
										sx={{
											px: { xs: 2, md: 3, lg: 4 },
											py: { xs: 2, md: 2.5, lg: 2.5 },
										}}>
										<Typography
											color={"white"}
											sx={{
												fontSize: {
													xs: "14px",
													md: "15px",
													mdPlus: "16px",
													lg: "18px",
													xl: "18px",
												},
											}}
											textAlign='justify'>
											When reading the data packets sent by MACS, the application listens for one
											of 5 input reports, and processes each respectively. First are the connected
											and disconnected reports which identify the module ID that has been
											connected or removed, and when connected the coordinates of the module. The
											final 3 input reports are the Button, Analog, and Joystick Reports. These
											reports contain the necessary data being read off the modules, as well as
											the ID of the module in use. During this entire data parsing interaction,
											the data is processed and then appropriately sent to the backend controller
											and virtual controller, which allows the frontend UI elements to be updated
											accordingly.
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.05} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						right: { xs: "-15%", md: "5%" },
						bottom: { xs: "30%", md: "10%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-13'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isMD ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-13`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.25} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: { xs: "50%", md: "42%" },
						bottom: { xs: "40%", md: "30%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-14'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-14`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						right: { xs: "-5%", md: "0%" },
						bottom: "45%",
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-15'
						height={"35vh"}
						width={"35vw"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-15`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.5} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlowEaseInOut}
					sx={{ position: "absolute", left: { xs: "0%", md: "3%" }, top: "10%", transform: "rotate(34deg)" }}>
					<HexGrid
						id='module-grid-25'
						height={"20vmin"}
						width={"20vmin"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-25`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.35} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotating}
					sx={{
						position: "absolute",
						left: { xs: "-5%", md: "2%" },
						bottom: "15%",
						transform: "rotate(154deg)",
					}}>
					<HexGrid
						id='module-grid-14'
						height={"20vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-22`}
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
			</ParallaxLayer>
		</>
	);
};

export default PageTwo;
