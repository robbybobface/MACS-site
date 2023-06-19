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
import ApplicationFlowChart from "../../assets/application_flowchart";
import BackendControllerFlowChart from "../../assets/backend_controller_flowchart";
import VirtualControllerFlowChart from "../../assets/virtual_controller_flowchart";

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
		x: open ? 0 : -40,
		from: { opacity: 0, x: -40 },
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

function MobileContentApplication() {
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
			return "50vmax";
		} else if (isSM) {
			return "60vmax";
		} else if (isSMPlus) {
			return "70vmax";
		} else {
			return "70vmax";
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
				<Box className={`${styles.slopeTopMobile} ${styles.red}`} sx={{ zIndex: 2 }} />
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
							zIndex: 3,
						}}>
						<Grid
							item
							xs={12}
							md={4.5}
							lg={5}
							sx={{
								mt: { xs: 0, md: -4 },
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Trail open={open}>
								<GradientText
									text='Inputs Designed By You'
									gradient='background: rgb(255,255,255); background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(190,77,106,1) 30%, rgba(162,0,42,1) 70%);'
									fontSize={{
										xs: "2.5rem",
										md: "4rem",
										mdPlus: "4rem",
										lg: "5.75rem",
										xl: "7.5rem",
									}}
									lineHeight='1.3'
									textAlign='center'
								/>
							</Trail>
						</Grid>
						<Grid
							item
							xs={12}
							md={7.5}
							lg={7}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Grid
								container
								spacing={1}
								rowGap={1}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid
									item
									xs={12}
									sm={10}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<TrailAlt open={open} delay={150}>
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
														md: "14px",
														mdPlus: "15px",
														lg: "17px",
														xl: "19px",
													},
												}}>
												The application built for the MACS was designed to give users the
												ability to configure their controller to their unique needs. The
												application was built using Electron and React, and is available on
												Windows. The application is designed to be accessible, intuitive and
												easy to use, with a simple and clean interface that shows the real-time
												topology of the controller. Wherein users can easily configure the
												inputs of their controller by simply clicking on the module they want to
												configure, and then selecting the input they want to assign to that
												module. Finally, the application also handles the virtual controller
												emulation, where the inputs from the MACS are translated into virtual
												controller inputs, based on the user's configurations, that can be used
												in any game.
											</Typography>
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={11}
									xsPlus={6}
									md={5.5}
									lg={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
									}}>
									<TrailAlt open={open} delay={200}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													zIndex: 100,
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-toplogy.png?tr=h-1500'
													hash='L49QdO4:02;[M.Rh%eM#2srW}uFw'
													alt='macs application'
													height={getImageSize()}
												/>
											</Card>
											<ImageCaption caption={"Topology"} light={false} />
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={11}
									xsPlus={6}
									md={5.5}
									lg={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
									}}>
									<TrailAlt open={open} delay={250}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													zIndex: 100,
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png?tr=h-1500'
													hash='L3A-Fx0E8w?Zm1GO$TML00rD*0%D'
													alt='application joystick configuration'
													height={getImageSize()}
												/>
											</Card>
											<ImageCaption caption={"Configuration"} light={false} />
										</Box>
									</TrailAlt>
								</Grid>
								<Grid
									item
									xs={11}
									xsPlus={6}
									md={5.5}
									lg={4}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										position: "relative",
									}}>
									<TrailAlt open={open} delay={300}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													zIndex: 100,
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=h-1500'
													hash='L~D,{5bJofa#%%WFoca}o#WAjra#'
													alt='macs emulation in Minecraft'
													height={getImageSize()}
												/>
											</Card>
											<ImageCaption caption={"Emulation"} light={false} />
										</Box>
									</TrailAlt>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* </Trail> */}
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.redAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 100,
					}}>
					<Grid
						container
						spacing={2}
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Grid
							item
							xs={12}
							sm={10}
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
							sm={10}
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
				<Box className={`${styles.slopeTopMobile} ${styles.red}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 100,
					}}>
					<Grid
						container
						spacing={2}
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Grid
							item
							xs={12}
							sm={10}
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
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, xl: 4 },
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
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
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
										component='div'
										fontSize={{
											xs: "18px",
											sm: "20px",
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
											xs: "18px",
											sm: "20px",
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
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeTopMobile} ${styles.redAlt}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeTopMobileOffsetAlt} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Box className={`${styles.slopeTopMobileOffsetAltTwo} ${styles.white}`} sx={{ zIndex: 1 }} />
				<Container
					maxWidth='xl'
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 100,
						mb: 10,
						pb: 5,
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
								text='Emulation & Application Visualized'
								gradient='background: rgb(176,38,84);
background: linear-gradient(125deg, rgba(176,38,84,1) 0%, rgba(162,0,42,1) 88%);'
								fontSize={{
									xs: "2.5rem",
									md: "3.5rem",
									mdPlus: "4rem",
									lg: "5rem",
									lgPlus: "5rem",
									xl: "5.25rem",
								}}
								textAlign={"center"}
								lineHeight={1.1}
								pb={{ xs: 0, md: 0, lg: 1, xl: 2 }}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={10}
							md={10}
							mdPlus={9}
							mt={1}
							sx={{
								display: { xs: "flex", lgPlusPlus: "none" },
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Box
								className={boxStyles.lightGreyBox}
								sx={{
									py: { xs: 2, md: 2, lg: 2 },
									px: { xs: 2, md: 3, lg: 4 },
									mt: { xs: 0, md: -1, lg: -2, xl: -3 },
									zIndex: 100,
								}}>
								<Typography
									color={"white"}
									sx={{
										fontSize: {
											xs: "14px",
											md: "15px",
											mdPlus: "15px",
											lg: "16px",
											xl: "17px",
										},
									}}
									textAlign='justify'>
									Emulating the inputs in-game happens via the VigemClient Library, which is a node
									accessible wrapper for the XInput API. Using this library, a virtual controller can
									be created and then updated as necessary. In this case, the state of the virtual
									controller is updated as module input reports are processed, with the user's
									configuration being used as the template to dictate the action to emulate.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={11}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 2, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
								}}>
								<Grid
									container
									spacing={2}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Grid
										item
										xs={12}
										sm={6}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Box
											sx={{
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													position: "relative",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-searching.png?tr=h-1500'
													hash='L06H$Ht700Rj*0j[ofay0mWB~qt8'
													alt='macs detection/searching'
													height={"auto"}
												/>
											</Card>
											<ImageCaption caption={"MACS Detection"} light={false} />
										</Box>
									</Grid>
									<Grid
										item
										xs={12}
										sm={6}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Box
											sx={{
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													position: "relative",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-topology-2.png?tr=h-1500'
													hash='L29G]o0L00{t0Z$v~n0M3THr}vuN'
													alt='macs topology two'
													height={"auto"}
												/>
											</Card>
											<ImageCaption caption={"Topology"} light={false} />
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={5}
							sx={{
								display: "flex",
								justifyContent: "space-evenly",
								alignItems: "center",
								flexDirection: "column",
							}}>
							<Grid
								container
								sx={{
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center",
									flexDirection: "column",
								}}>
								<Grid
									item
									xs={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box sx={{ position: "relative", display: "flex" }}>
										<Box
											className={boxStyles.whiteBox}
											sx={{
												overflow: "clip",
												p: 2,
											}}>
											<VirtualControllerFlowChart width={getFlowChartWidth()} />
										</Box>
										<ImageCaption
											caption={"Application Breakdown - Virtual Controller"}
											light={false}
										/>
									</Box>
								</Grid>
								<Grid
									item
									mt={2}
									md={11}
									mdPlus={12}
									lg={12}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box
										className={boxStyles.lightGreyBox}
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
												xs={12}
												sm={6}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													position: "relative",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=h-1500'
														hash='L~D,{5bJofa#%%WFoca}o#WAjra#'
														alt='macs emulation in Minecraft'
														height={"auto"}
													/>
												</Card>
												<ImageCaption caption={"Emulation Ex. 1"} light={true} />
											</Grid>
											<Grid
												item
												xs={12}
												sm={6}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													position: "relative",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														position: "relative",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation-2.png?tr=h-1500'
														hash='L0429*-PIqaJ#3$P-ixuEI$+a6V['
														alt='macs emulation in Minecraft 2'
														height={"auto"}
													/>
												</Card>
												<ImageCaption caption={"Emulation Ex. 2"} light={true} />
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={11}>
							<Box
								className={boxStyles.darkGreyBox}
								sx={{
									px: { xs: 2, md: 2, lg: 4 },
									py: { xs: 2, md: 2, lg: 2.5 },
								}}>
								<Grid
									container
									spacing={2}
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Grid
										item
										xs={12}
										sm={6}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/slider-config.png?tr=h-1500'
													hash='L7AU1]csu|-n^ntk-:rawk$jP1xo'
													alt='macs slider configuration'
													height={"auto"}
												/>
											</Card>
											<ImageCaption caption={"Slider Configuration"} light={false} />
										</Box>
									</Grid>
									<Grid
										item
										xs={12}
										sm={6}
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												position: "relative",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/button-config.png?tr=h-1500'
													hash='L6E2qc3WBo=^00IA9YVb34,G~X-5'
													alt='macs button configuration'
													height={"auto"}
												/>
											</Card>
											<ImageCaption caption={"Button Configuration"} light={false} />
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Box className={`${styles.slopeBottomMobile} ${styles.red}`} sx={{ zIndex: 2 }} />
				<Box className={`${styles.slopeBottomMobileOffset} ${styles.white}`} sx={{ zIndex: 1 }} />
			</Box>
		</>
	);
}

export default MobileContentApplication;
