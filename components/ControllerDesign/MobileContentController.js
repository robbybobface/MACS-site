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
													maxHeight: "234px",
												}}>
												<PWMIcon size={getImageSize()} />
												<Typography
													mt={{ xs: 1.5, xsPlus: 2, md: 1.5 }}
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
													maxHeight: "234px",
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
													mt={{ xs: 1, smPlus: 0 }}
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
													maxHeight: "234px",
												}}>
												<USBIcon size={getImageSize()} />
												<Typography
													mt={{ xs: 0.5, xsPlus: -0.5, smPlus: -2 }}
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
												src='https://ik.imagekit.io/5ywj5edvn/hexagon-map.png?tr=h-1500'
												hash='CiMaV5s.~qWBbI%2j]Rj'
												alt='central hub render top'
												height={getImageHeights()}
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
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-1.jpg?tr=h-1500'
												hash='CIKT[5~q-QJDx[RPw@$e'
												alt='macs configuration 1'
												height={getControllerImageHeight()}
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
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-2.jpg?tr=h-1500'
												hash='CLKwg~_3}*I]x[V@ob$y'
												alt='macs configuration 2'
												height={getControllerImageHeight()}
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
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-3.jpg?tr=h-1500'
												hash='CHKdYr~q},t7%fnNV?Ri'
												alt='macs configuration 3'
												height={getControllerImageHeight()}
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
												minWidth: getControllerImageHeight(),
											}}>
											<BlurHashedImage
												src='https://ik.imagekit.io/5ywj5edvn/macs-config-4.jpg?tr=h-1500'
												hash='CKJk4M~p==%0S$s8M{e-'
												alt='macs configuration 4'
												height={getControllerImageHeight()}
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
