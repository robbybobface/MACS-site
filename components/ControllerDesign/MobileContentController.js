import React, { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, Container, Grid, Divider, useMediaQuery, Card, CardContent, CardMedia } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail, to } from "@react-spring/web";
import ImageCaption from "../ImageCaption";
import ImageCaptionAlt from "../ImageCaptionAlt";
import BlurHashedImage from "../Partials/BlurHashedImage";
import PWMIcon from "../../assets/pwm";
import USBIcon from "../../assets/usb";
import HexagonIcon from "../../assets/hexgon";
import ControllerFlowChart from "../../assets/controller_flowchart";
import USBTable from "../../assets/usb_table";

const Trail = ({ open, children }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 10, tension: 1000, friction: 100 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 10,
		y: open ? 0 : 50,
		// height: open ? 110 : 0,
		from: { opacity: 0, x: 10, y: 50 },
	});
	return (
		<>
			{trail.map(({ ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div>{items[index]}</animated.div>
				</animated.div>
			))}
		</>
	);
};

const TrailAlt = ({ open, children, delay }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2000, friction: 200 },
		opacity: open ? 1 : 0,
		y: open ? 0 : -40,
		from: { opacity: 0, y: 0 },
		delay: delay ?? 0,
	});
	return (
		<>
			{trail.map(({ ...style }, index) => (
				<animated.div key={index} style={style}>
					<animated.div>{items[index]}</animated.div>
				</animated.div>
			))}
		</>
	);
};

function MobileContentController() {
	const isXS = useMediaQuery(theme.breakpoints.down("xs"));
	const isXSPlus = useMediaQuery(theme.breakpoints.down("xsPlus"));
	const isSMMinus = useMediaQuery(theme.breakpoints.down("smMinus"));
	const isSM = useMediaQuery(theme.breakpoints.down("sm"));
	const isSMPlus = useMediaQuery(theme.breakpoints.down("smPlus"));
	const isMD = useMediaQuery(theme.breakpoints.down("md"));
	const isMDPlus = useMediaQuery(theme.breakpoints.down("mdPlus"));
	const isLG = useMediaQuery(theme.breakpoints.down("lg"));
	const isLGPlus = useMediaQuery(theme.breakpoints.down("lgPlus"));
	const isLGPlusPlus = useMediaQuery(theme.breakpoints.down("lgPlusPlus"));
	const isXL = useMediaQuery(theme.breakpoints.down("xl"));
	const getFlowChartWidth = () => {
		if (isXS) {
			return "30vmax";
		} else if (isXSPlus) {
			return "85vw";
		} else if (isSMMinus) {
			return "55vmax";
		} else if (isSM) {
			return "60vmax";
		} else if (isSMPlus) {
			return "70vmax";
		} else {
			return "60vmax";
		}
	};

	const getControllerImageHeight = () => {
		if (isXS) {
			return 100;
		} else if (isXSPlus) {
			return 140;
		} else if (isSMMinus) {
			return 175;
		} else if (isSM) {
			return 200;
		} else if (isSMPlus) {
			return 225;
		} else {
			return 300;
		}
	};

	const getImageSize = () => {
		if (isXS) return "xs";
		if (isXSPlus) return "xs";
		if (isSM) return "xsPlus";
		if (isMD) return "sm";
		if (isMDPlus) return "md";
		if (isLG) return "mdPlus";
		if (isXL) return "lg";
		return "xl";
	};

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

	const getFlowchartHeight = () => {
		if (isXS) {
			return "25vmin";
		} else if (isXSPlus) {
			return "90vmin";
		} else if (isSMMinus) {
			return "80vmin";
		} else if (isSM) {
			return "70vmin";
		} else if (isSMPlus) {
			return "60vmin";
		} else if (isMD) {
			return "60vmin";
		} else {
			return "40vmin";
		}
	};

	const getTableHeight = () => {
		if (isXS) {
			return "25vw";
		} else if (isXSPlus) {
			return "90vw";
		} else if (isSMMinus) {
			return "80vw";
		} else if (isSM) {
			return "70vw";
		} else if (isSMPlus) {
			return "55vw";
		} else if (isMD) {
			return "55vw";
		} else {
			return "55vw";
		}
	};

	return (
		<>
			<Box
				className='noselect'
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: "#323232",
					overflow: "hidden",
				}}>
				<Box className={`${styles.slopeTopMobile} ${styles.green}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container className='noselect' maxWidth='xl' sx={{ zIndex: 3 }}>
					{/* <Trail open={open}> */}
					<Grid
						container
						spacing={2}
						rowGap={0}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							px: { xs: 0, md: 5 },
							zIndex: 100,
							// minHeight: "1000px",
						}}>
						<Grid
							item
							xs={12}
							md={4.5}
							lg={5.5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='A Controller of Modules'
									gradient='background: rgb(255,255,255);
background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(160,232,134,1) 25%, rgba(25,177,0,1) 100%);'
									fontSize={{
										xs: "2.5rem",
										md: "3.5rem",
										mdPlus: "4rem",
										lg: "5.75rem",
										xl: "7.5rem",
									}}
									lineHeight='1.3'
									textAlign={{ xs: "center", md: "left" }}
								/>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							md={7.5}
							lg={6.5}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Grid
								container
								spacing={2}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									zIndex: 100,
								}}>
								<Grid
									item
									xs={12}
									sm={10}
									md={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<TrailAlt open={open} delay={75}>
										<Box
											className={boxStyles.darkGreyBox}
											sx={{
												borderRadius: 2,
												py: { xs: 1, md: 3, lg: 3.5, xl: 4 },
												px: { xs: 2, md: 4, lg: 5, xl: 6 },
											}}>
											<Typography
												textAlign='justify'
												fontSize={"20px"}
												color={"white"}
												sx={{
													fontSize: {
														xs: "14px",
														md: "15px",
														mdPlus: "16px",
														lg: "18px",
														xl: "20px",
													},
												}}>
												The MACS was designed around allowing the user full control in
												customizing the controller for their unique needs. To achieve this, the
												MACS uses systems of identification and communication between each
												module and the central hub. Module positions are identified by unique
												PWM signals sent on the I2C bus. And because of their hexagonal shapes,
												module positions are represented using a hexagonal coordinate system.
												The input states of each module are communicated to the central hub
												using the I2C bus, and then are subsequently packaged into individual
												USB data packets and sent to the application.
											</Typography>
										</Box>
									</TrailAlt>
								</Grid>
							</Grid>
							<Grid
								container
								mt={1}
								spacing={2}
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									zIndex: 100,
								}}>
								<Grid
									item
									xs={4}
									sm={3}
									md={4}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<TrailAlt open={open} delay={100}>
										<Box
											sx={{
												position: "relative",
												maxHeight: "234px",
												minHeight: "115px",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													justifyContent: "center",
													position: "relative",
													px: { xs: 2, md: 2, lg: 2.5, xl: 4 },
													pt: { xs: 2, md: 2, lg: 2.5, xl: 4 },
													pb: { xs: 1, smPlus: 1, mdPlus: 1.15 },
													backgroundColor: theme.palette.moduleBackground.main,
													backdropFilter: "blur(7px)",
													WebKitBackdropFilter: "blur(7px)",
												}}>
												<PWMIcon size={getImageSize()} />
												<Typography
													fontSize={{
														xs: "16px",
														md: "17px",
														mdPlus: "18px",
														lg: "20px",
														xl: "24px",
													}}
													fontWeight='bold'
													textAlign='center'
													color='white'
													fontFamily='Gilroy-Bold'>
													PWM
												</Typography>
											</Card>
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={4}
									sm={3}
									md={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<TrailAlt open={open} delay={150}>
										<Box sx={{ position: "relative", maxHeight: "234px", minHeight: "115px" }}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													justifyContent: "center",
													position: "relative",
													px: { xs: 2, md: 2, lg: 2.5, xl: 4 },
													pt: { xs: 2, md: 2, lg: 2.5, xl: 4 },
													pb: 1,
													backgroundColor: theme.palette.moduleBackground.main,
													backdropFilter: "blur(7px)",
													WebKitBackdropFilter: "blur(7px)",
												}}>
												<HexagonIcon size={getImageSize()} />
												<Typography
													fontSize={{
														xs: "16px",
														md: "17px",
														mdPlus: "18px",
														lg: "20px",
														xl: "24px",
													}}
													fontWeight='bold'
													textAlign='center'
													color='white'
													fontFamily='Gilroy-Bold'>
													I2C
												</Typography>
											</Card>
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={4}
									sm={3}
									md={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<TrailAlt open={open} delay={200}>
										<Box sx={{ position: "relative", maxHeight: "234px", minHeight: "115px" }}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													justifyContent: "center",
													position: "relative",
													px: { xs: 2, md: 2, lg: 2.5, xl: 4 },
													pt: { xs: 2, md: 2, lg: 2.5, xl: 4 },
													pb: 1,
													backgroundColor: theme.palette.moduleBackground.main,
													backdropFilter: "blur(7px)",
													WebKitBackdropFilter: "blur(7px)",
												}}>
												<USBIcon size={getImageSize()} />
												<Typography
													fontSize={{
														xs: "16px",
														md: "17px",
														mdPlus: "18px",
														lg: "20px",
														xl: "24px",
													}}
													fontWeight='bold'
													textAlign='center'
													color='white'
													fontFamily='Gilroy-Bold'>
													USB
												</Typography>
											</Card>
										</Box>
									</TrailAlt>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.greenAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						justifyContent: "center",
						alignItems: "center",
						zIndex: 100,
					}}>
					<Grid
						container
						spacing={2}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Grid
							item
							xs={12}
							sm={11}
							smMinus={10}
							md={6}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='Localizing Modules'
								gradient='background: rgb(160,232,134);
background: linear-gradient(125deg, rgba(160,232,134,1) 0%, rgba(6,168,44,1) 100%);'
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
									When a module is first connected to the controller, it scans each of its sides for
									neighbors by reading input PWM signals on each side. To be recognized by the central
									hub module, which will be responsible for calculating its coordinates and polling it
									for input data, the new module has to “announce” its arrival to the central hub over
									I2C. Although a module only has one set of pins dedicated to I2C, it first
									initializes those pins as an I2C “Queen Bee” so that it can inform the central hub
									of its identity and its neighbors. After it sends that information, it
									re-initializes the same pins as a “Worker Bee” device so that it can respond to
									queries from the central hub. Since the hub has a set of I2C pins always set on
									worker bee mode, it has its own I2C address that new modules can send their
									information to.
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
							}}>
							<Grid
								container
								spacing={2}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid item xs={10} xsPlus={8} sm={7} smMinus={6} md={5.5} lgPlus={7}>
									<Box sx={{ position: "relative" }}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												position: "relative",
												minHeight: getImageHeights(),
												minWidth: getImageHeights(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/hexagon-map.png?tr=w-1000'
												hash='data:image/png;base64,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'
												alt='Hexagonal Coordinate Plane'
											/>
										</Card>
										<ImageCaption caption={"Hexagonal Coordinate Plane"} light={false} />
									</Box>
								</Grid>
								<Grid item sm={11} smMinus={10} md={6.5} lgPlus={5}>
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
													lg: "17px",
													lgPlus: "17px",
													xl: "18px",
												},
											}}
											textAlign='justify'>
											MACS and its subsequent modules are arranged in a grid-like format. So, for
											calculating position and the coordinates of each module, a traditional
											hexagonal coordinate plane is used.
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12} sm={11} smMinus={10}>
									<Box
										className={boxStyles.whiteBox}
										sx={{
											px: { xs: 2, md: 3, lg: 4 },
											py: { xs: 2, md: 2.5, lg: 2.5 },
										}}>
										<Typography
											color={"black"}
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
											With the hub having received new information about a module on its worker
											bee pins, the hub does a lookup to see if any of the new module’s neighbors
											have assigned coordinates. If they do, the coordinates of the new module can
											be determined based on which side the module was connected to. An
											interesting case arises if multiple modules are connected simultaneously, in
											which case it is possible that a module sends its own introduction before
											any of its neighbors are assigned coordinates. In this case, the central hub
											stores the dependencies of that new module in a data structure. These
											dependencies can then be resolved recursively; when a module is assigned
											coordinates, the central hub checks to see which pending modules depend on
											this new information and assigns their coordinates as well. This continues
											until all possible dependencies can be resolved.
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.green}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						justifyContent: "center",
						alignItems: "center",
						zIndex: 100,
					}}>
					<Grid
						container
						spacing={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Grid
							item
							xs={12}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='Processing Inputs'
								gradient='background: rgb(160,232,134);
background: linear-gradient(125deg, rgba(160,232,134,1) 0%, rgba(6,168,44,1) 100%);'
								fontSize={{ xs: "2.5rem", md: "4rem", mdPlus: "4.75rem", lg: "5.25rem", xl: "6rem" }}
								textAlign={"center"}
								lineHeight={1.1}
								pb={1}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={11}
							smPlus={10}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									py: { xs: 2, md: 2, lg: 2 },
									px: { xs: 2, md: 3, lg: 4 },
									mt: { xs: 0, md: -1, lg: -2, xl: -3 },
								}}>
								<Typography
									color={"black"}
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
									For information about the input states to be reflected in the application, these
									states must first be read on the controller itself. To do this, the MACS uses the
									I2C protocol.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={11} smPlus={10}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 3, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
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
									When modules connect and register themselves on the central hub, they add themselves
									to a list that the central hub uses to poll input states. The central hub’s main
									task is to loop through this list, query each registered module, and push that input
									state through USB to the application. The central hub is aware of each module’s type
									and will request the according number of bytes. For example, 3 bytes will be
									requested for a joystick module, while only 1 byte will be requested for a button
									module.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							mt={1}
							xs={12}
							sm={11}
							smPlus={10}
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								flexDirection: "column",
							}}>
							<Box sx={{ position: "relative", display: "flex" }}>
								<Box
									className={boxStyles.whiteBox}
									sx={{
										overflow: "clip",
										p: 2,
									}}>
									<ControllerFlowChart width={getFlowChartWidth()} />
								</Box>
								<ImageCaption caption={"Controller Breakdown"} light={false} />
							</Box>
						</Grid>
						<Grid item xs={12} sm={11} smPlus={10} mt={1}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 3, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
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
									When a modules coordinates are assigned, the central hub adds a module’s address to
									a list representing all known modules on the controller. The hub then perpetually
									iterates through that list, querying each module for its input and packaging that
									information to be sent over USB. If a module is disconnected from the controller,
									this iterating loop will not receive data from the module, marking it for deletion.
									At the end of the loop, the hub removes the module from all of its coordinate data
									structures and the list, and then sends a message describing the disconnection over
									USB.
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							xsPlus={10}
							smMinus={10}
							sm={9}
							smPlus={10}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									py: { xs: 2, md: 2, lg: 2 },
									px: { xs: 2, md: 2, lg: 2.5 },
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Grid
									container
									spacing={2}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Grid
										item
										xs={6}
										lg={3}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												alignSelf: "stretch",
												position: "relative",
												height: getControllerImageHeight(),
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-1.jpg?tr=w-1000'
												hash='data:image/png;base64,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'
												alt='macs configuration 1'
											/>
										</Card>
									</Grid>
									<Grid
										item
										xs={6}
										lg={3}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												alignSelf: "stretch",
												position: "relative",
												height: getControllerImageHeight(),
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-2.jpg?tr=w-1000'
												hash='data:image/png;base64,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'
												alt='macs configuration 2'
											/>
										</Card>
									</Grid>
									<Grid
										item
										xs={6}
										lg={3}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												alignSelf: "stretch",
												position: "relative",
												height: getControllerImageHeight(),
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg?tr=w-1000'
												hash='data:image/png;base64,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'
												alt='macs configuration 3'
											/>
										</Card>
									</Grid>
									<Grid
										item
										xs={6}
										lg={3}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Card
											elevation={4}
											sx={{
												display: "flex",
												alignSelf: "stretch",
												position: "relative",
												height: getControllerImageHeight(),
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg?tr=w-1000'
												hash='data:image/png;base64,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'
												alt='macs configuration 4'
											/>
										</Card>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.greenAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						justifyContent: "center",
						alignItems: "center",
						mb: { xs: 15, sm: 15, smPlus: 17, md: 0 },
						zIndex: 100,
					}}>
					<Grid
						container
						spacing={2}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Grid
							item
							xs={12}
							sm={10}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<GradientText
								text='Reporting Inputs'
								gradient='background: rgb(160,232,134);
background: linear-gradient(125deg, rgba(160,232,134,1) 0%, rgba(6,168,44,1) 100%);'
								lineHeight={1.2}
								fontSize={{ xs: "2.5rem", md: "3.9rem", mdPlus: "4.25rem", lg: "4.75rem", xl: "5rem" }}
								textAlign='center'
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.lightGreyBox}
								sx={{
									px: { xs: 2, xl: 3 },
									py: 2,
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
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.whiteBox}
								sx={{
									overflow: "clip",
									display: "flex",
									height: "auto",
								}}>
								<USBTable width={getTableHeight()} />
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, xl: 4 },
									py: 2,
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
							sm={10}
							md={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
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
											xs: "1.2rem",
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
											xs: "1.2rem",
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
											xs: "1.2rem",
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
				<Box className={`${styles.slopeBottomMobile} ${styles.green}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeBottomMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
			</Box>
		</>
	);
}

export default MobileContentController;
