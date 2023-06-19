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
import ApplicationFlowChart from "../../assets/application_flowchart";
import ImageCaption from "../ImageCaption";
import BackendControllerFlowChart from "../../assets/backend_controller_flowchart";

const PageThree = ({ offset, gradient, onClick, router }) => {
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
							xs={12}
							md={7}
							mdPlus={7}
							lgPlusPlus={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Card elevation={4} className={boxStyles.whiteBox} sx={{ mb: 1 }}>
								<CardContent
									sx={{
										// pb: "16px !important",
										backgroundColor: theme.palette.hexagonRedAlt.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonRed.main,
										},
										px: 3,
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
										Backend
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
										The backend portion of the application contains the information for the current
										modules received from the MACS as well as the saved configurations. The state of
										the modules is kept using an Array of Module Objects. The state of each
										configuration is kept using an Array of Configuration Objects. A Module Object
										is defined by the ID, coordinates, and input type, which are created when a
										module is connected. The Configuration Object is defined by a module ID, and
										then a configuration, which is an Object containing the respective configuration
										options set by the user on the frontend. The interaction between these two
										Arrays happens when the inputs are being processed in the virtual controller.
										While the input reports are read, they are compared against the configuration of
										that module and then emulated to match the configuration found. The backend also
										lets the virtual controller know when to connect and disconnect.
									</Typography>
								</CardContent>
							</Card>
							<Card elevation={4} className={boxStyles.whiteBox} sx={{ mb: 1 }}>
								<CardContent
									sx={{
										// pb: "16px !important",
										backgroundColor: theme.palette.hexagonRedAltTwo.main,
										transition: "all ease-in 0.25s",
										"&:hover": {
											backgroundColor: theme.palette.hexagonRedTwo.main,
										},
										px: 3,
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
										Frontend
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
										On the frontend of the application, MACS's current topology is always shown to
										the user and updates in real time. This is possible because module connect
										reports send the coordinates of the module. This allows the modules to be
										absolutely positioned properly in the hexagonal coordinate plane defined
										earlier. The module types come from the IDs of the module themselves as the type
										of input is embedded within a module's ID. This entire topological graphic
										element is placed withing a panning wrapper allowing the controller to be zoomed
										in/out on, moved, and rotated. The front end also handles the configuration
										creation and updates, where users can select the exact type of input they want
										the module to emulate. Clicking on a module brings up the interface to configure
										it. Saving this configuration on the frontend sends the new configuration object
										to the backend. Finally the frontend also communicates to the backend when to
										start and stop the virtual controller.
									</Typography>
								</CardContent>
							</Card>
							{/* <Card elevation={4} className={boxStyles.whiteBox}>
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
							</Card> */}
						</Grid>
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
							<GradientText
								text='Visualization & Input Configuration'
								gradient='background: rgb(176,38,84);
background: linear-gradient(125deg, rgba(176,38,84,1) 0%, rgba(162,0,42,1) 88%);'
								lineHeight={1.2}
								fontSize={{ xs: "2.5rem", md: "3.7rem", mdPlus: "4.1rem", lg: "4.75rem", xl: "5rem" }}
								textAlign='center'
								mb={2}
							/>
							<Box sx={{ position: "relative", display: "flex" }}>
								<Box
									className={boxStyles.whiteBox}
									sx={{
										overflow: "clip",
										p: 2,
									}}>
									<BackendControllerFlowChart width={getFlowChartWidth()} />
								</Box>
								<ImageCaption caption={"Application Breakdown - Backend Controller"} light={false} />
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
									When it comes to input configuration, users can select each module that has been
									identified and assign it any input from the list of supported actions on the virtual
									controller. In this way a button can act as a joystick movement, or trigger pull,
									and joystick movement can act as a button or trigger. The entire configuration
									process is as simple as assigning the input requested, and when that module’s input
									report is received the virtual controller will perform the current configuration set
									by the user.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer offset={offset} speed={0.2} onClick={onClick} style={{ zIndex: 10 }} factor={newFactor}>
				<Box
					className={styles.rotatingReverseEaseInOut}
					sx={{
						position: "absolute",
						left: "42%",
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
								cellStyle={{ fill: theme.palette.hexagonYellow.main }}
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
						left: { xs: "-5%", md: "10%" },
						bottom: "14%",
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
								cellStyle={{ fill: theme.palette.hexagonRed.main }}
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
					sx={{ position: "absolute", right: "-8%", bottom: "55%", transform: "rotate(98deg)" }}>
					<HexGrid
						id='module-grid-23'
						height={useMediaQuery(theme.breakpoints.down("md")) ? "32vh" : "38vh"}
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
								cellStyle={{ fill: theme.palette.hexagonBlack.main }}
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
								cellStyle={{ fill: theme.palette.hexagonBlue.main }}
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
					sx={{
						position: "absolute",
						left: { xs: "0%", md: "20%" },
						top: "10%",
						transform: "rotate(34deg)",
					}}>
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
								cellStyle={{ fill: theme.palette.hexagonOrange.main }}
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
								cellStyle={{ fill: theme.palette.hexagonGreen.main }}
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

export default PageThree;
