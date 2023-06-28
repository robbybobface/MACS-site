import React from "react";
import { Box, Typography, Container, Grid, Divider, useMediaQuery, Card, CardContent, CardMedia } from "@mui/material";
import styles from "../../styles/Overview.module.css";
import boxStyles from "../../styles/BoxStyles.module.css";
import theme from "../../styles/theme";
import GradientText from "../GradientText";
import { animated, useTrail } from "@react-spring/web";
import ImageCaption from "../ImageCaption";
import BlurHashedImage from "../Partials/BlurHashedImage";
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
		width: "100%",
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
		if (isXS) return "200px";
		if (isXSPlus) return "200px";
		if (isSM) return "170px";
		if (isMD) return "250px";
		if (isMDPlus) return "140px";
		if (isLG) return "145px";
		if (isXL) return "150px";
		return "165px";
	};

	const getBigImageSize = () => {
		if (isXS) return "215px";
		if (isXSPlus) return "225px";
		if (isSM) return "300px";
		if (isMD) return "250px";
		if (isMDPlus) return "140px";
		if (isLG) return "145px";
		if (isXL) return "150px";
		return "165px";
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
												flex: 1,
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													height: getImageSize(),
													width: "100%",
													backgroundColor: "transparent",
													zIndex: 100,
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-toplogy.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs application'
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
												flex: 1,
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													height: getImageSize(),
													width: "100%",
													backgroundColor: "transparent",
													zIndex: 100,
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/joystick-config.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='application joystick configuration'
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
												flex: 1,
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													height: getImageSize(),
													width: "100%",
													backgroundColor: "transparent",
													zIndex: 100,
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs emulation in Minecraft'
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
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													flexGrow: 1,
													height: getBigImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-searching.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs detection/searching'
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
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "100%",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													flexGrow: 1,
													height: getBigImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/macs-topology-2.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs topology two'
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
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										alignSelf: "stretch",
									}}>
									<Box
										className={boxStyles.lightGreyBox}
										sx={{
											py: { xs: 2, md: 2, lg: 2 },
											px: { xs: 2, md: 2, lg: 2.5 },
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											width: "100%",
										}}>
										<Grid
											container
											spacing={2}
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												flex: 1,
											}}>
											<Grid
												item
												xs={12}
												sm={6}
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													position: "relative",
													width: "100%",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														flexGrow: 1,
														height: getBigImageSize(),
														width: "100%",
														backgroundColor: "transparent",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation.png?tr=w-1000'
														hash='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAAAXNSR0IArs4c6QAACJRJREFUaEONWUurHlUQ7DM3L/wB7l0LiqC4EBQ1aEACQUEiKPgAJYuAD1ACAR8IUQi+0IjRGEHBRRYiLhRBERRRUePCjRsXbly4EARBSL4Z7Ud115mZGxOYnJn5vnunqruqu8/c9s5P0yQX+Gcf0jfwbV7xHV35fP5rWxNpImJrExn4GPx6C6t+ZueTH3FeP++g2v8SYHpTcVECHfD4XhJbCcpFEUjgSkbBg4SS9mtdlYj+t0pgHnXDMgNvtwi0RR/XlDW9lQ/DQ8WjnVkYRLaQDZwzeDqvIDiJdvrsBSTEgJjEIvr+xcyKtMyO59nTkekPGaWEQjaQyhZJxogNU5D1VX97Ejn94zqBtSz4NyeK/LQuo1nGDLw+kUmk/kMmqXeSzkxCShD+iRBJe/uHbTKQ0S+dlOY9BQp/OzPPvI8kEAAyMYHXaLucyrjwASSnHvCgiLRT3xOBRdgBsAAvMpD8+mxcLAEDxdFP4C6dVRNr9FDR3vpu05fRLiFKAB8XGbsXPtBzzsyakdkDeHCZGCAZ8BI85KNrgtcsvPnNOa7yVPNhTK/upf+678D9M6ORpMIrVErDx52EXBJLD1jUty2hVEaVwMmv/wlEeBouq9RkFizakRXyQIJHNoxXn1g42CtRlMCumUHzTArVx++xgaMmSHvjy7+7JwEMUuFASkounyLClankFLJCA+FMcBkMAl0muugX8J6AG1hxtde/+KuXUDwMwB0spFJkHGxIiwnhu+li+vUUeR4J0A+SCPUFrjzwTclxknbisz+zx+ajEPUEE1FfRB+Z8bW8gAyUHPOhXEHCAzwXYVzQysSZ6TpwVCArpa9++keXAUR7YdyM8hjGZRltIytMgcosH0pdlHSNGWeRjRg5Sv8zE7/y8e81MHDzCsBeZWbSsVCPaWiPvhPC9z0HNHPAD/NRIEjwbFRDW81M3QjBGXjpo996E3d1nyNLkVfwaxnpqlQQApEg4INdVSHMNanvmaz6yEf3DZ/aZy988OsFJMTRD9CIvkUd9zgbQRTZWBCgRsREYkzuifT7B/ig5CjSjp/5pbxLmu3kMI1ZSh00ASciJivLgq8uocoEBrDKAGVittmp6lMksgOjImgyn3//50UnTvAGoCK/BO9kXPdETDgLQV5rdvYFN7LV8RXgq/cwvGGKw2R77N2zZeLsoOi2MGdFPAmNADxbrTcoAZeVzyCeFSbgOCoDOV2i6tDW03uGM+WRxH7m2dPf0ihB8w+Z1LvvNoDXiCADIT0hSc1llFnApscItG7vjP1Et7ODkZ85+VUVT28Cs7I5l8iMyLgh+dRnDhre8RVHkggJZfTthI0bmyC7RxkAE/36k699ztW/Uh667vW9koWOQJFxCbGUehKOlRoc5BFgc1hL6RSZEpJIO/ryJzXQzzzAETSTplwo6kkA93yF5DgT7gclEoNSNDXyZUUaW9CItl+CRJWhduT4h50H+vLpD8wKsyCwCVIMfkaAMpEyQomNSpTQQvuulnBzt5+mNMEDjx8702egGwcqkusZUAIz8HEt06YkZF6g0hp+qKrkFCAbPy9XQ/9Bq4yiZ489/V7fibu5xx/ss04AtSzoOa5xHisTyHLqgeBqxK/7qC/ZrOBqseKZknJ3480GSejho6f6TrxKgGW0FnEiMW5C/36PveBd2TPRva+EHLLQB/ggUamhzMAPh584EcUzjNVNlVRJsg9sJ5vznhUjUCSdgN6Dn2rEKBK1WyizIuIA7aTyNR9IH3r0xZJQdk0aIVAKA4gbmuVS5zIVCa9Esyx0JOhdpIFB1Otc2hCgQ0okrcAv7cHDz6H9RnFD+w/ZmKm5WfWaF9M8S8hJ2M+EX1JGMTfxZsmBsLYRaawDVSRq1/Fz7YGHnpqN0zRBcjOyc46oAoyIU0YcuN4P6aSpa/Cr9y+II0c9gMsQlaik5AZnKYm0e+8/grc61e5zBMY4ABP3BkXke+mQD7qKNImMZeDex1Rxstr4pthLKEsJFSpK7933PNJNo2k2q9U9AbEMwJQsnZANywnVKNfa0c32OKl/0agTAZ9ASUrZjcvM7a6DhxYErNSBgJ1jpokuG1JKradsoH3XP3xgHhj5zQaS3aIQeYSX4ON+7iv5O+GeO2+/r/50YW99eS+L5hOrhIRshR+2MbUSsIy4dHyN90gWn4hsrK5tyCZWA957IcssZqQ79h8sEwcBbECQBZOSgrZs6IhQXrDrkA5IWfQVNAO3DGCi0Mj70UAk5VMkIKH5mrOS5u3AvgOx16t53Z5kZCLyLWQUJJwAiFBlgmkx9ClojXqp0IGPIBDmnFT7y+g3Ne/gjcyt0M9IZuP9e2/tPQDgucbTjYRnwbNRHdfNDd273lPz9uNNJgWdxyAy6aFElATM62sPvEmzVxXYVtLQp/duu+F6JxB/9cjI23t4At9KQikjMzdNnStaN+CbIQgMIuMgk4IeB2kBXkkoaJRMj7gDN/lYcgK43qveJ23fdddUBuwtWUhJwXdHRD0z4dflhyiTYVCPuALXY8tIyLhl1zJtSbPVD5NPNK4leBCJikoEzOO3XHt5l4FmoCP6dr6RNvgqcn6xWinNvxmEVCYFusMBb2KNa72nxGwlAkoizQrd66rRt+taabKWtvfqyzIDFn2AH0ZpCtqO89IGBX9ORM6V3Ogv8zbLUpWZxp0i4y6ZNrrudEIbBR/H5ARURosMLAgQifmodPNVl1YGTEIRbYu8gj0vYhmoppgvZ2p3i5dw2HiFXHZ3JGSzw+U0bklTApoJjTw8wNpH9M0LPk3YwTjUujddeQkR2BSB+LLJk8YRzFI5RCJ/VIVjIyYy7pFp3OMZsEyonCIT6oMVCaV5IR2tpHEelbamC4V24xUoPzBJD9jmqDkJqgKYJ+lVKCaPILBbZLNLTFJGopcRJJTmRfUh/TuBwpfj0X8P/xdP9S37YIneWgAAAABJRU5ErkJggg=='
														alt='macs emulation in Minecraft'
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
													width: "100%",
												}}>
												<Card
													elevation={4}
													sx={{
														display: "flex",
														alignSelf: "stretch",
														position: "relative",
														flexGrow: 1,
														height: getBigImageSize(),
														width: "100%",
														backgroundColor: "transparent",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/minecraft-emulation-2.png?tr=w-1000'
														hash='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAAAXNSR0IArs4c6QAABZFJREFUaEOtWQlS3DAQ3OEVARLY3UASWP7/PacszdFzCZNKKlVry1d3T/dINnR7Om+n8A8HZLv67Y6dttP+X/9tMKDj45y5t8HJYxOuj8+QG8s4/RsBGvexmzMQgZwIGEpPwNAmMXjgPxOYwPmxbtuwT/SpiixtJsD34zLo/WNVQDABsJ9yoAKkgAX4kd9JwlB4mxjDJeBQBXyuCBYIeLBHgP5LDvS+CrDJgqheVZQZ0O35cjDETK7xZrZMyEUIp9anut/qGQFtQ2CCXVbgk/JKN/FlX+UDm4I9PIU44KLb89VxiuWwGxRZ6DoFPgRSiwGOfp6EMTWBUCHYfklBIKufKwFkFv6c14UTsJs4UAH8gQBPAuefURj1znbqreQU3Ky9ysVVsLrqDpqrtpk10P5Gt/ML2lW97wHuj1iTKYR2GcJQZSLQbuHBlf/jtfTOBAz5wkJb32YFbVIeJKmrEsA3zaMWiE70fnn193XeK8iMctp4DOMRIqkzhVyklqzH83Pp/fKrEgZ6aPQ3d4dxVV2t2od+edFlpQXP1Y+COQJRWa9mXQ0kUVbDsbEd13MWncwIZSGHhG+X341tg987xfVqX96Ie55WP6pSfdVE8Bi9Xf/UKap8B2B73zWSh+G+pRYrWb02V8ETGCeS68nzWlB3RQJBdu0oFCoRKeaDqnZid/pzfestlI7w09342jq1lfzol6oRTgYCDRBIf18NAbQiU3ZrZeKPeqt0GRne+H19X4bYcmfg5tYnXjgQhePK9/NOIFApSKF5VPC/YqNQiWDHTzsSC6MZ+HW9NU6PoDwRihU4oHh1SlsFNzc0k+nug0wgA/cjYKXFHBCL3jWlWnEAXKxER6dkNeh1VKCF6ETzqq9rQAFxF2Ebb4KrBOplC71ePmpxCL3eB7hzfxzH9b6osvQ7H6yW8agqvZQEQF1HZHYfBNfVARciCrSZpHCi8i823WIRBP0ZCERAxAQQul6eyIE2FWpG2gU3v5WF9dhY3gS7X8/TQmoYPu4MNHawKr4OyyY67m6Qw6593Suqk+2Tn0RCAIPMeA00GeB5LM8FPYn8FS59elS/WwXnUAx2QeDyLCEeKKFAJDhPYiMhJrUwoqGPOY/MHWcP2JHNCHiORwtlS9EZCJi3WXEl5Mn480y1pA/7BW2TPrXHT+nwhUNIeRN6EvT8JBkw+cUmTnE+rNVwWfFz7H6IdXfLkE2+QItl0DqOSFYe5wtsw0rAmUdCu4PGbfa/EZu3gkY1B2IHki/VAlJ/+cUyqg4fDqosOKxPP3AiC1YRlakZN5vmlZHzuc9BVQnhvLlPN/j3iGhQbiQ/vjMB7DT7Md4f6jKBuQlhh9Dn/gBf2+SbJ1YCbGTgpXj2ViitFPOAqaPvTMCCOdXWHAwbFWOsvgO+nxv+sKEfbPdxzACT2ock5DtY60qYA2ynXip6fPywdy6pAntfgYPqMobe9xnA5WOoAnqftwdg3ObeP0lVFrKy7+fQ48OHTnhedbCOVIED29nIJRjsIh9vp7qTlAHf9/mPhmqrDNwvIaw69LATkCkjdh2xDtooZELSm6aY0vfSdaadhMgoAqNQS2EldEJD+0yS9HBvIRZbmHXA/2IjIBNbKDpVJiz9ZWQTLIDHMIuVdsCulfo84KxD90JA7VFYJ1RAc4BLD3mDwTnAdR0BbS3VV2EGGL3v5wCRJ4T4/t7eyCSMA+DdnKAwyHOfJy7sTKMUNldKK7Guw38bE+VDFSzERsLap6hfV4G+fZsv9bhEUOCDBLdQlwerktnoCwSwhXKgRX2byKSl1p1IWueawK72nRBAMpEAgIelJ1Zgdh2zkQRXg6ytFDuS2SbaSXKgBMb6U+1hYO8KAmOWdsuLhgB7Y3qd5wSe0Ezx2YHcPk9onY14BTZ+/gL2y65bi+WXAgAAAABJRU5ErkJggg=='
														alt='macs emulation in Minecraft 2'
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
												width: "100%",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													flexGrow: 1,
													height: getBigImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/slider-config.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs slider configuration'
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
												width: "100%",
											}}>
											<Card
												elevation={4}
												sx={{
													display: "flex",
													alignSelf: "stretch",
													position: "relative",
													flexGrow: 1,
													height: getBigImageSize(),
													width: "100%",
													backgroundColor: "transparent",
												}}>
												<BlurHashedImage
													src='https://ik.imagekit.io/5ywj5edvn/button-config.png?tr=w-1000'
													hash='data:image/png;base64,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'
													alt='macs button configuration'
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
