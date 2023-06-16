import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Button, Container, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { MACSFlowchart } from "../../assets/macs_flowchart";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import USBTable from "../../assets/usb_table";

const PageFour = ({ offset, gradient, onClick, router }) => {
	const newFactor = useMediaQuery(theme.breakpoints.down("md"))
		? 1000 / window.innerHeight >= 1.2
			? 1000 / window.innerHeight
			: 1.2
		: 1;
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isLGPlusPlus = useMediaQuery(theme.breakpoints.down("lgPlusPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));
	const isXLPlus = useMediaQuery(theme.breakpoints.down("xlPlus"));

	const getFlowchartHeight = () => {
		if (isMD) {
			return "39vmin";
		} else if (isMDPlus) {
			return "39vmin";
		} else if (isLG) {
			return "38vmin";
		} else if (isLGPlus) {
			return "38vmin";
		} else if (isLGPlusPlus) {
			return "45vmin";
		} else if (isXL) {
			return "55vmin";
		} else if (isXLPlus) {
			return "50vmin";
		} else {
			return "50vmin";
		}
	};
	return (
		<>
			<ParallaxLayer offset={offset} speed={0.1} onClick={onClick} factor={newFactor}>
				<div className={styles.slopeBegin} />
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.15} onClick={onClick} factor={newFactor}>
				<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
			</ParallaxLayer>
			<ParallaxLayer
				className={`${styles.text} ${styles.number} noselect`}
				offset={offset}
				speed={0.3}
				style={{ zIndex: 9999 }}
				factor={newFactor}>
				<Container
					maxWidth='xl'
					onClick={onClick}
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						mb: { xs: 6, md: 0 },
					}}>
					<Grid
						container
						onClick={onClick}
						spacing={2}
						sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
						<Grid
							item
							onClick={onClick}
							xs={12}
							md={5}
							mdPlus={5}
							lgPlusPlus={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								// minHeight: { xs: "100px", md: "725px" },
							}}>
							<Box
								onClick={onClick}
								className={boxStyles.lightGreyBox}
								sx={{
									px: { xs: 2, xl: 3 },
									py: 2,
									mb: 2,
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "14px",
											mdPlus: "15px",
											lg: "16px",
											xl: "18px",
										},
									}}
									textAlign='center'>
									At the heart of each module is a Raspberry Pi Pico using the TinyUSB library. This
									allows the MACS to identify as a USB Human Interface Device (HID), so that a custom
									message format can be defined.
								</Typography>
							</Box>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									overflow: "clip",
									display: "flex",
									maxWidth: `calc(${getFlowchartHeight()} - 10px)`,
									height: "auto",
								}}>
								<USBTable width={getFlowchartHeight()} />
							</Box>
							<Box
								onClick={onClick}
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, xl: 4 },
									py: 2,
									mt: 2,
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "14px",
											mdPlus: "15px",
											lg: "16px",
											xl: "18px",
										},
									}}
									textAlign='justify'>
									For MACS to support arbitrarily many modules, a message format was needed to
									communicate an arbitrary amount of data. However, the USB specification requires
									devices to have a fixed packet format. So, in theme with the modular approach, each
									packet contains input data for only a single module. Additionally, to disambiguate
									between the different modules, packets contain the module's ID. This means that
									packets would only be sent one at a time, as opposed to all at once.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={7}
							mdPlus={7}
							lgPlusPlus={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								minHeight: "900px",
							}}>
							<GradientText
								text='Reporting Inputs'
								gradient='background: rgb(160,232,134);
background: linear-gradient(125deg, rgba(160,232,134,1) 0%, rgba(6,168,44,1) 100%);'
								lineHeight={1.2}
								fontSize={{ xs: "2.5rem", md: "3.9rem", mdPlus: "4.25rem", lg: "4.75rem", xl: "5rem" }}
								textAlign='center'
								mb={2}
							/>
							<Card elevation={4} className={boxStyles.whiteBox} sx={{ mb: 1 }}>
								<CardContent
									sx={{
										pb: "16px !important",
										backgroundColor: theme.palette.hexagonGreenAlt.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonGreen.main,
										},
									}}>
									<Typography
										// pb={{ xs: 0, lg: 1 }}
										component='div'
										fontSize={{
											xs: "2.5rem",
											md: "18px",
											mdPlus: "20px",
											lg: "24px",
										}}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'
										mt={-1}>
										Descriptor Settings
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												md: "14px",
												mdPlus: "15px",
												mdPlus: "15px",
												lgPlus: "1rem",
											},
										}}>
										When the MACS is first plugged into a host, data concerning it's operation is
										sent to this host as its Device Descriptor. This descriptor allows the computer
										to understand the maximum current the MACS can draw from the bus, and the
										polling period between USB packets.
									</Typography>
								</CardContent>
							</Card>
							<Card elevation={4} className={boxStyles.whiteBox} sx={{ mb: 1 }}>
								<CardContent
									sx={{
										pb: "16px !important",
										backgroundColor: theme.palette.hexagonGreenAltTwo.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonGreenAltThree.main,
										},
									}}>
									<Typography
										// pb={{ xs: 0, lg: 1 }}
										component='div'
										fontSize={{
											xs: "2.5rem",
											md: "18px",
											mdPlus: "20px",
											lg: "24px",
										}}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'
										mt={-1}>
										Latency
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												md: "14px",
												mdPlus: "15px",
												mdPlus: "15px",
												lgPlus: "1rem",
											},
										}}>
										Each packet contains data for only 1 module, meaning MACS’s latency is roughly
										proportional to the number of modules. Thus, if enough modules are connected to
										the controller, the user would experience noticeable input latency. However, in
										practice, most users will attach no more than 10 modules to the controller. In
										this case, an upper bound on the latency would be 11 milliseconds.
									</Typography>
								</CardContent>
							</Card>
							<Card elevation={4} className={boxStyles.whiteBox}>
								<CardContent
									sx={{
										pb: "16px !important",
										backgroundColor: theme.palette.hexagonGreen.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonGreenAltFour.main,
										},
									}}>
									<Typography
										// pb={{ xs: 0, lg: 1 }}
										component='div'
										fontSize={{
											xs: "2.5rem",
											md: "18px",
											mdPlus: "20px",
											lg: "24px",
										}}
										fontWeight='bold'
										fontFamily='Gilroy-Bold'
										mt={-1}>
										Throughput
									</Typography>
									<Typography
										color='text.secondary'
										textAlign='justify'
										sx={{
											fontSize: {
												xs: "14px",
												md: "14px",
												mdPlus: "15px",
												lgPlus: "1rem",
											},
										}}>
										The MACS aims to avoid sending redundant data. To do this, the MACS sends
										packets when a module’s input has changed. In the case of analog inputs and
										joysticks, input changes are compared within a predefined tolerance. Since most
										of a controller’s inputs remain idle for most of the time, this greatly reduces
										the number of packets sent.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: "30%",
						bottom: { xs: "0%", md: "50%" },
						transform: "rotate(180deg)",
					}}>
					<HexGrid
						id='module-grid-21'
						height={"25vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-21`}
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
			<ParallaxLayer offset={offset} speed={-0.01} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingSlow}
					sx={{ position: "absolute", right: "-5%", bottom: "55%", transform: "rotate(98deg)" }}>
					<HexGrid
						id='module-grid-23'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "32vh" : "40vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 49, y: 49 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-23`}
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
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.4} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: { xs: "0%", md: "45%" },
						bottom: { xs: "-80%", md: "22%" },
						transform: "rotate(72deg)",
					}}>
					<HexGrid
						id='module-grid-24'
						height={"15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={isLG ? { x: 45, y: 45 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-24`}
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
								cellStyle={{ fill: theme.palette.hexagonBlue.main }}
								stroke='white'
								strokeWidth={1}
							/>
						</Layout>
					</HexGrid>
				</Box>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={-0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingFast}
					sx={{
						position: "absolute",
						right: { xs: "0%", md: "5%" },
						bottom: { xs: "-10%", md: "20%" },
						transform: "rotate(216deg)",
					}}>
					<HexGrid
						id='module-grid-26'
						height={"15vh"}
						width={"auto"}
						viewBox='-50 -50 100 100'
						preserveAspectRatio='xMidYMid meet'>
						<Layout
							size={useMediaQuery(theme.breakpoints.down("md")) ? { x: 50, y: 50 } : { x: 50, y: 50 }}
							flat={true}
							spacing={1.05}
							origin={{ x: 0, y: 0 }}>
							<Hexagon
								id={`hexagon-26`}
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
			</ParallaxLayer>
		</>
	);
};

export default PageFour;
